import { CustomElement, MXElement, Prop } from '@interstice/mx';
import { HNNode, node } from '../data/hn-node';

// Time ago format
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const month = 4 * week;
const year = 365 * day;
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const msTimestamp = Date.now();
const isUnix = (value: number) => msTimestamp / value >= 1000;
const timeAgo = (from: number, to: number = Date.now()): string => {
  const diff = ((isUnix(from) ? from : from / second) - (isUnix(to) ? to : to / second)) * second; // diff in seconds
  const absDiff = Math.abs(diff);
  let relDiff = diff;
  let format: Intl.RelativeTimeFormatUnit = 'second';
  if (absDiff >= minute) {
    format = 'minute';
    relDiff = diff / minute;
  }
  if (absDiff >= hour) {
    format = 'hour';
    relDiff = diff / hour;
  }
  if (absDiff >= day) {
    format = 'day';
    relDiff = diff / day;
  }
  if (absDiff >= week) {
    format = 'week';
    relDiff = diff / week;
  }
  if (absDiff >= month) {
    format = 'month';
    relDiff = diff / month;
  }
  if (absDiff >= year) {
    format = 'year';
    relDiff = diff / year;
  }

  return rtf.format(Math.round(relDiff), format as Intl.RelativeTimeFormatUnit);
};

@MXElement({ tag: 'hn-story' })
export class HNStoryElement extends CustomElement {
  @Prop()
  id: string = '';

  @Prop()
  compact: boolean = false;

  story: HNNode | undefined = undefined;

  loadStory = async (): Promise<void> => {
    this.story = await node(this.id);
  };

  async connected() {
    await this.loadStory();
  }

  styles() {
    return /* css */ `
      ${super.styles()}
      .story-line {
        display: flex;
        flex-direction: column;
      }
      a, mx-link::part(anchor),
      mx-link::part(anchor-current-location),
      mx-link::part(anchor-current-page)  {
        color: inherit;
        text-decoration: none;
      }
      a:hover,mx-link::part(anchor):hover,
      mx-link::part(anchor-current-location):hover,
      mx-link::part(anchor-current-page):hover  {
        text-decoration: underline;
      }
      .story-title {
        margin:0;
      }
      .story-meta {
        display: flex;
        gap: 0.5rem;
      }
      .story-by {
        color: var(--author-color);
      }
      .story-time::before {
        content: '⌛';
        margin-right: 0.1em;
        margin-left: 0.4em;
      }
      .story-external {
        position: relative;
      }
      .story-external::before {
        position: absolute;
        content: '🔗';
        left: -1.4em;
      }
    `;
  }

  render() {
    return (
      <div class="story-line">
        {this.compact ? (
          <mx-link href={`/${this.story!.id}`}>
            <h3 class="story-title">{this.story?.title}</h3>
          </mx-link>
        ) : this.story?.url ? (
          <a href={this.story!.url!} target="_blank">
            <h3 class="story-title story-external">{this.story?.title}</h3>
          </a>
        ) : (
          <h3 class="story-title">{this.story?.title}</h3>
        )}
        <div class="story-meta">
          <span class="story-by">{this.story?.by}</span>
          <time class="story-time" datetime={this.story?.time ? this.story.time.toString() : ''}>
            {this.story?.time && timeAgo(this.story?.time)}
          </time>
        </div>
      </div>
    );
  }
}
