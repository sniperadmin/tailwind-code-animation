<style>
.code-green {
  color: hsl(88, 72%, 71%);
}
.code-blue {
  color: hsl(193, 100%, 71%);
}
.code-red {
  color: hsl(355, 100%, 70%);
}
.code-purple {
  color: hsl(281, 77%, 75%);
}
.code-white {
  color: hsl(180, 100%, 96%);
}
.code-yellow {
  color: hsl(41, 100%, 67%);
}
</style>

<template>
  <div class="mx-auto" style="width: 40rem">
    <div class="flex flex-col">
      <div
        class="code-white text-sm font-mono bg-black p-6 rounded leading-normal overflow-x-auto"
        style="width: 36rem; line-height: 1.675"
      >
        <div class="flex mb-5">
          <span class="h-3 w-3 bg-red rounded-full"></span>
          <span class="ml-2 h-3 w-3 bg-orange rounded-full"></span>
          <span class="ml-2 h-3 w-3 bg-green rounded-full"></span>
        </div>

        <!-- coding line one -->
        <line-one></line-one>
        <!-- ./coding line one -->

        <!-- coding line two -->
        <line-two></line-two>
        <!-- ./coding line two -->

        <!-- coding line 3 -->
        <line-three></line-three>
        <!-- ./coding line 3 -->

        <!-- coding line 4 -->
        <line-four></line-four>
        <!-- ./coding line 4 -->

        <!-- coding line 5 -->
        <line-five></line-five>
        <!-- ./coding line 5 -->

        <!-- coding line 6 -->
        <line-six></line-six>
        <!-- ./coding line 6 -->

        <!-- coding line 7 -->
        <line-seven></line-seven>
        <!-- ./coding line 7 -->

        <div>
          <div class="inline-block text-grey mr-6">8</div>
          &#160;
          <div class="inline-block code-blue">&nbsp;&nbsp;&lt;/</div>
          <tag-name>div</tag-name>
          <div class="inline-block code-blue">&gt;</div>
        </div>

        <div>
          <div class="inline-block text-grey mr-2">9</div>
          &#160;
          <div class="inline-block code-blue">&lt;/</div>
          <tag-name />
          <div class="inline-block code-blue">&gt;</div>
        </div>

        <!-- test -->
        <html-tag :inline="false" tagName="a" attrName="ref">
          <template v-slot:attrValues>
            name
          </template>

          code
        </html-tag>
      </div>

      <div
        ref="card"
        class="shadow-lg leading-normal self-end bg-white w-64 rounded -mt-16 relative"
        style="width: 20rem; font-family: Akagi Pro"
      >
        <div ref="cardLarge" class="hidden p-6">
          <img
            ref="avatar"
            class="h-24 w-24 block mr-6 rounded-full"
            src="https://media.licdn.com/dms/image/C4D03AQGr_sf7Je78ng/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=G3HQNsy3N-A9fHdG3I-D8CkOhEtQFoMr0ukj99CwBkU"
            alt
          />
          <div ref="content" class="text-grey-darkest text-left">
            <h2 ref="name" class="text-xl font-normal text-grey-darkest">
              <div class="inline-block relative">Nasr Galal</div>
            </h2>
            <div ref="role">
              <div class="inline-block relative text-purple">
                Vuejs Master
              </div>
            </div>
            <div ref="email">
              <div class="inline-block relative text-grey-dark">
                nasrbue@google.com
              </div>
            </div>
            <div ref="phone">
              <div class="inline-block relative text-grey-dark">
                (555) 765-4321
              </div>
            </div>
          </div>
        </div>
        <div ref="cardSmall" class="hidden p-6">
          <img
            ref="avatar"
            class="h-16 w-16 block mb-4 mx-auto rounded-full"
            src="https://media.licdn.com/dms/image/C4D03AQGr_sf7Je78ng/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=G3HQNsy3N-A9fHdG3I-D8CkOhEtQFoMr0ukj99CwBkU"
            alt
          />
          <div ref="content" class="text-grey-darkest text-center">
            <h2 ref="name" class="text-xl font-normal text-grey-darkest">
              <div class="inline-block relative">Nasr Galal</div>
            </h2>
            <div ref="role">
              <div class="inline-block relative text-purple">
                Vuejs Master
              </div>
            </div>
            <div ref="email">
              <div class="inline-block relative text-grey-dark">
                nasrbue@gmail.com
              </div>
            </div>
            <div ref="phone">
              <div class="inline-block relative text-grey-dark">
                (555) 765-4321
              </div>
            </div>
          </div>
        </div>
        <div ref="cardInner">
          <img
            ref="avatar"
            class="h-16 w-16 block mb-4"
            src="https://media.licdn.com/dms/image/C4D03AQGr_sf7Je78ng/profile-displayphoto-shrink_200_200/0?e=1582761600&v=beta&t=G3HQNsy3N-A9fHdG3I-D8CkOhEtQFoMr0ukj99CwBkU"
            alt
          />
          <div ref="content" class="text-grey-darkest">
            <h2 ref="name" class="text-base font-normal text-grey-darkest">
              <div class="inline-block relative">Nasr Galal</div>
            </h2>
            <div ref="role">
              <div class="inline-block relative">Vuejs Master</div>
            </div>
            <div ref="email">
              <div class="inline-block relative">nasrbue@gmail.com</div>
            </div>
            <div ref="phone">
              <div class="inline-block relative">(555) 765-4321</div>
            </div>
          </div>
        </div>
        <div class="absolute flex pin-y pin-l">
          <div
            ref="resizeCursor"
            class="mt-16 h-6 w-6 -ml-3 opacity-0 relative"
            style="transform: translateX(150px) translateY(150px)"
          >
            <svg
              ref="resizeCursorCircle"
              class="absolute pin h-6 w-6 text-black opacity-50"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(255, 255, 255, 0.5)"
                stroke-width="8"
                fill="rgba(0, 0, 0, 0.5)"
              ></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineOne from "./LineOne";
import LineTwo from "./LineTwo";
import LineThree from "./LineThree";
import LineFour from "./LineFour";
import LineFive from "./LineFive";
import LineSix from "./LineSix";
import LineSeven from "./LineSeven";
import TagName from "./tagtools/TagName";
// import OpenCustomTag from "./OpenCustomTag";
// import CloseCustomTag from "./CloseCustomTag";
import HtmlTag from "./HtmlTag";

import { TweenLite, Power4 } from "gsap";
import { tweenTo, tweenStaggerTo } from "../gsapDefinitions";
import _ from "lodash";

export default {
  name: "WorkflowAnimation",
  components: {
    LineOne,
    LineTwo,
    LineThree,
    LineFour,
    LineFive,
    LineSix,
    LineSeven,
    TagName,
    // OpenCustomTag,
    // CloseCustomTag,
    HtmlTag
  },
  methods: {
    runAnimation() {
      this.animateCardPadding()
        .then(() => this.animateAvatarRadius())
        .then(() => this.animateAvatarCentering())
        .then(() => this.animateNameSize())
        .then(() => this.animateRoleColor())
        // .then(() => this.animateContactColors())
        .then(() => this.animateContentCentering())
        // .then(() => this.animateCardWidening())
        .then(() => this.animateCardFlexLayout())
        .then(() => this.animateAvatarMarginFix())
        .then(() => this.animateContentLeftAlign())
        // .then(() => this.animateAvatarRightMargin())
        .then(() => this.animateAvatarLarger());
      // .then(() => this.animateResizeCursorIntoPosition())
      // .then(() => this.animateCardResizing());
    },
    animateCardPadding() {
      return tweenTo(
        this.$refs.cardInner,
        1,
        { padding: "1.5rem", ease: Power4.easeOut },
        "+=.25"
      ).then(() => {
        tweenTo(this.$children[0].$refs.cardCursor, 0.08, {
          visibility: "hidden"
        });
      });
    },
    animateAvatarRadius() {
      console.log(this.$children[1].$refs.avatarCursor);
      return tweenTo(this.$children[1].$refs.avatarCursor, 0.08, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$children[1].$refs.classAvatarRounded.$el.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() =>
          tweenTo(
            this.$refs.avatar,
            1,
            { borderRadius: "2rem", ease: Power4.easeOut },
            "+=.25"
          )
        );
    },
    animateAvatarCentering() {
      return tweenStaggerTo(
        this.$children[1].$refs.classAvatarCenter.$el.children,
        0.08,
        { display: "inline-block" },
        0.08
      )
        .then(() => {
          const oldPosition = this.$refs.avatar.getBoundingClientRect();
          TweenLite.set(this.$refs.avatar, {
            marginLeft: "auto",
            marginRight: "auto"
          });
          TweenLite.set(this.$refs.avatar, { x: 0 });
          TweenLite.set(this.$refs.avatar, {
            x: oldPosition.left - this.$refs.avatar.getBoundingClientRect().left
          });
          return tweenTo(
            this.$refs.avatar,
            1,
            { x: 0, ease: Power4.easeOut },
            "+=.25"
          );
        })
        .then(() => {
          tweenTo(this.$children[1].$refs.avatarCursor, 0.08, {
            visibility: "hidden"
          });
        });
    },
    animateNameSize() {
      return tweenTo(this.$children[3].$refs.nameCursor, 0.08, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$children[3].$refs.classNameSize.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() =>
          tweenTo(
            this.$refs.name,
            1,
            { fontSize: "1.25rem", ease: Power4.easeOut },
            "+=.25"
          )
        )
        .then(() => {
          tweenTo(this.$children[3].$refs.nameCursor, 0.08, {
            visibility: "hidden"
          });
        });
    },
    animateRoleColor() {
      return tweenTo(this.$children[4].$refs.roleCursor, 0.08, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$children[4].$refs.classRoleColor.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() =>
          tweenTo(
            this.$refs.role,
            1,
            { color: "#9561e2", ease: Power4.easeOut },
            "+=.25"
          )
        )
        .then(() =>
          tweenTo(this.$children[4].$refs.roleCursor, 0.08, {
            visibility: "hidden"
          })
        );
    },
    animateContactColors() {
      return tweenTo(this.$refs.contactCursor1, 0.25, { visibility: "visible" })
        .then(() =>
          tweenTo(this.$refs.contactCursor2, 0.25, { visibility: "visible" })
        )
        .then(() => {
          return Promise.all([
            tweenStaggerTo(
              this.$refs.classContactColor1.children,
              0.08,
              { display: "inline-block" },
              0.08
            ),
            tweenStaggerTo(
              this.$refs.classContactColor2.children,
              0.08,
              { display: "inline-block" },
              0.08
            )
          ]);
        })
        .then(() => {
          return Promise.all([
            tweenTo(
              this.$refs.email,
              1,
              { color: "#8795a1", ease: Power4.easeOut },
              "+=.25"
            ),
            tweenTo(
              this.$refs.phone,
              1,
              { color: "#8795a1", ease: Power4.easeOut },
              "+=.25"
            )
          ]);
        })
        .then(() => {
          return Promise.all([
            tweenTo(this.$refs.contactCursor1, 0.08, { visibility: "hidden" }),
            tweenTo(this.$refs.contactCursor2, 0.08, { visibility: "hidden" })
          ]);
        });
    },
    animateContentCentering() {
      return tweenTo(this.$children[2].$refs.contentCursor, 0.08, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$children[2].$refs.classContentCenter.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() => {
          const elements = _.flatMap([...this.$refs.content.children], el => [
            ...el.children
          ]);
          const oldPositions = elements.map(el => el.getBoundingClientRect());

          TweenLite.set(this.$refs.content, { textAlign: "center" });

          elements.forEach((el, i) => {
            TweenLite.set(el, {
              x: oldPositions[i].left - el.getBoundingClientRect().left
            });
          });

          return tweenTo(elements, 1, { x: 0, ease: Power4.easeOut });
        })
        .then(() =>
          tweenTo(this.$children[2].$refs.contentCursor, 0.25, {
            visibility: "hidden"
          })
        );
    },
    animateCardWidening() {
      return tweenTo(this.$refs.resizeCursor, 1, {
        opacity: 1,
        x: 0,
        y: 0,
        ease: Power4.easeOut
      })
        .then(() => tweenTo(this.$refs.resizeCursorCircle, 0, { opacity: 1 }))
        .then(() =>
          tweenTo(
            this.$refs.card,
            2,
            { width: "30rem", ease: Power4.easeOut },
            "+=.25"
          )
        )
        .then(() => tweenTo(this.$refs.resizeCursorCircle, 0, { opacity: 0.5 }))
        .then(() =>
          tweenTo(
            this.$refs.resizeCursor,
            1,
            { opacity: 0, x: 100, y: 150, ease: Power4.easeInOut },
            "+=.25"
          )
        );
    },
    animateCardFlexLayout() {
      return tweenTo(this.$children[0].$refs.cardFlexCursor, 0.25, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$children[0].$refs.classCardFlex.$el.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() => {
          const contentElements = _.flatMap(
            [...this.$refs.content.children],
            el => [...el.children]
          );
          const oldCardPosition = this.$refs.cardInner.getBoundingClientRect();
          const oldAvatarPosition = this.$refs.avatar.getBoundingClientRect();
          const oldContentPositions = contentElements.map(el =>
            el.getBoundingClientRect()
          );

          TweenLite.set(this.$refs.cardInner, { display: "flex" });

          const newCardPosition = this.$refs.cardInner.getBoundingClientRect();
          const newAvatarPosition = this.$refs.avatar.getBoundingClientRect();
          const newContentPositions = contentElements.map(el =>
            el.getBoundingClientRect()
          );

          TweenLite.set(this.$refs.cardInner, {
            height: oldCardPosition.height
          });
          TweenLite.set(this.$refs.avatar, {
            x: oldAvatarPosition.left - newAvatarPosition.left
          });
          contentElements.forEach((el, i) => {
            TweenLite.set(el, {
              x: oldContentPositions[i].left - newContentPositions[i].left,
              y: oldContentPositions[i].top - newContentPositions[i].top
            });
          });

          return Promise.all([
            tweenTo(
              this.$refs.avatar,
              1,
              { x: 0, ease: Power4.easeOut },
              "+=.25"
            ),
            tweenTo(
              contentElements,
              1,
              { x: 0, y: 0, ease: Power4.easeOut },
              "+=.25"
            ),
            tweenTo(
              this.$refs.cardInner,
              1,
              { height: newCardPosition.height, ease: Power4.easeOut },
              "+=.25"
            )
          ]);
        })
        .then(() =>
          tweenTo(this.$children[0].$refs.cardFlexCursor, 0.25, {
            visibility: "hidden"
          })
        );
    },
    animateAvatarMarginFix() {
      return tweenTo(this.$children[1].$refs.avatarCursor, 0.25, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$children[1].$refs.classAvatarMarginFix.$el.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() => {
          const oldAvatarPosition = this.$refs.avatar.getBoundingClientRect();
          const oldContentPosition = this.$refs.content.getBoundingClientRect();

          TweenLite.set(this.$refs.avatar, { marginRight: 0, marginLeft: 0 });

          const newAvatarPosition = this.$refs.avatar.getBoundingClientRect();
          const newContentPosition = this.$refs.content.getBoundingClientRect();

          TweenLite.set(this.$refs.avatar, {
            x: oldAvatarPosition.left - newAvatarPosition.left
          });
          TweenLite.set(this.$refs.content, {
            x: oldContentPosition.left - newContentPosition.left
          });

          return Promise.all([
            tweenTo(
              this.$refs.avatar,
              1,
              { x: 0, ease: Power4.easeOut },
              "+=.25"
            ),
            tweenTo(
              this.$refs.content,
              1,
              { x: 0, ease: Power4.easeOut },
              "+=.25"
            )
          ]);
        })
        .then(() =>
          tweenTo(this.$children[1].$refs.avatarCursor, 0.25, {
            visibility: "hidden"
          })
        );
    },
    animateContentLeftAlign() {
      return tweenTo(this.$children[2].$refs.contentLeftAlignCursor, 0.25, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$children[2].$refs.classContentLeftAlign.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() => {
          const elements = _.flatMap([...this.$refs.content.children], el => [
            ...el.children
          ]);
          const oldPositions = elements.map(el => el.getBoundingClientRect());

          TweenLite.set(this.$refs.content, { textAlign: "left" });

          elements.forEach((el, i) => {
            TweenLite.set(el, {
              x: oldPositions[i].left - el.getBoundingClientRect().left
            });
          });

          return tweenTo(elements, 1, { x: 0, ease: Power4.easeOut });
        })
        .then(() =>
          tweenTo(this.$children[2].$refs.contentLeftAlignCursor, 0.25, {
            visibility: "hidden"
          })
        );
    },
    animateAvatarRightMargin() {
      return tweenTo(this.$refs.avatarCursor, 0.25, { visibility: "visible" })
        .then(() =>
          tweenStaggerTo(
            this.$refs.classAvatarRightMargin.$el.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() => {
          const oldContentPosition = this.$refs.content.getBoundingClientRect();

          TweenLite.set(this.$refs.avatar, { marginRight: "1.5rem" });

          const newContentPosition = this.$refs.content.getBoundingClientRect();

          TweenLite.set(this.$refs.content, {
            x: oldContentPosition.left - newContentPosition.left
          });

          return tweenTo(
            this.$refs.content,
            1,
            { x: 0, ease: Power4.easeOut },
            "+=.25"
          );
        })
        .then(() =>
          tweenTo(this.$refs.avatarCursor, 0.25, { visibility: "hidden" })
        );
    },
    animateAvatarLarger() {
      TweenLite.set(this.$refs.avatar, { borderRadius: "100%" });

      return tweenTo(this.$children[1].$refs.avatarLargerCursor, 0.08, {
        visibility: "visible"
      })
        .then(() =>
          tweenStaggerTo(
            this.$children[1].$refs.classAvatarLarger.$el.children,
            0.08,
            { display: "inline-block" },
            0.08
          )
        )
        .then(() =>
          tweenTo(
            this.$refs.avatar,
            1,
            { height: "6rem", width: "6rem", ease: Power4.easeOut },
            "+=.25"
          )
        )
        .then(() =>
          tweenTo(this.$children[1].$refs.avatarLargerCursor, 0.08, {
            visibility: "hidden"
          })
        );
    },
    animateResizeCursorIntoPosition() {
      TweenLite.set(this.$refs.cardInner, { display: "none" });
      TweenLite.set(this.$refs.cardLarge, { display: "flex" });

      return tweenTo(this.$refs.resizeCursor, 1, {
        opacity: 1,
        x: 0,
        y: 0,
        ease: Power4.easeOut
      }).then(() => tweenTo(this.$refs.resizeCursorCircle, 0, { opacity: 1 }));
    },
    animateCardResizing() {
      return Promise.all([
        tweenTo(this.$refs.cardLarge, 0, { display: "none" }, "+=.65"),
        tweenTo(this.$refs.cardSmall, 0, { display: "block" }, "+=.65"),
        tweenTo(
          this.$refs.card,
          2,
          { width: "20rem", ease: Power4.easeOut },
          "+=.25"
        )
      ])
        .then(() => {
          return Promise.all([
            tweenTo(this.$refs.cardLarge, 0, { display: "flex" }, "+=.5"),
            tweenTo(this.$refs.cardSmall, 0, { display: "none" }, "+=.5"),
            tweenTo(
              this.$refs.card,
              2,
              { width: "30rem", ease: Power4.easeOut },
              "+=.25"
            )
          ]);
        })
        .then(() => this.animateCardResizing());
    }
  },
  created() {
    this.$on("test", () => {
      // console.log("catched");
      setTimeout(() => {
        this.runAnimation();
      }, 1000);
    });
  }
};
</script>
