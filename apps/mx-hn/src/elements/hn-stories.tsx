import { CustomElement, MXElement, Param } from '@interstice/mx';
import { stories, HNNode, HNNodeListType, node } from '../data/hn-node';

@MXElement({ tag: 'hn-stories' })
export class HNStories extends CustomElement {
  async elements() {
    await import('./hn-story');
  }

  @Param({ key: 'filter' })
  itemId: number | undefined = undefined;

  @Param({ key: 'filter' })
  type: HNNodeListType = HNNodeListType.New;

  stories: number[] = [];

  story: HNNode | undefined = undefined;

  get itemView() {
    return this.itemId !== undefined && !isNaN(this.itemId);
  }

  async loadStories(): Promise<void> {
    this.stories = await stories(this.type);
  }

  async loadStory(): Promise<void> {
    this.story = await node(this.itemId!);
  }

  async connected() {
    if (!this.itemView) {
      if (!this.stories.length) {
        await this.loadStories();
      }
      return;
    }
    if (!this.story) {
      await this.loadStory();
    }
  }

  styles() {
    return /* css */ `
      ${super.styles()}
      :host {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .story-list {
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
        padding: 2.5rem 0;
      }
    `;
  }

  loadingStyles() {
    return /* css */ `
      @keyframes ripple {
        0% {
          top: 36px;
          left: 36px;
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          top: 0px;
          left: 0px;
          width: 72px;
          height: 72px;
          opacity: 0;
        }
      }
      .loading {
        display: flex;
        justify-content: center;
      }
      .ripple {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .ripple div {
        position: absolute;
        border: 4px solid var(--accent-color);
        opacity: 1;
        border-radius: 50%;
        animation: ripple 1.25s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
      .ripple div:nth-child(2) {
        animation-delay: -0.5s;
      }
      .ripple div:nth-child(3) {
        animation-delay: -0.75s;
      }
    `;
  }

  loading() {
    return (
      <div class="loading">
        <div class="ripple">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="story-list">
        {this.itemView ? (
          this.story ? (
            <hn-story
              key={this.story!.id.toString()}
              id={this.story!.id.toString()}
              title={this.story!.title!}
              type={this.story!.type}
              time={this.story!.time!.toString()}
              by={this.story!.by}
            ></hn-story>
          ) : (
            <div>Story not found</div>
          )
        ) : (
          this.stories.map((s) => (
            <hn-story key={s.toString()} id={s.toString()} compact="true"></hn-story>
          ))
        )}
      </div>
    );
  }
}
