<template>
  <div scene style="--size: 50vmin">
    <div rotation animate="true">
      <div center-z>
        <div grid style="--dimension: 5">
          <!-- l: layers counted from bottom to top -->
          <!-- r: row counted from back to front -->
          <!-- c: column counted from left to right -->

          <!-- layer 1 -->
          <div pixel style="--l: 1; --r: 1; --c: 1; --color: #FF9000"><span></span></div>
          <div pixel style="--l: 1; --r: 5; --c: 1; --color: #0000FF"><span></span></div>
          <div pixel style="--l: 1; --r: 1; --c: 5; --color: #FFFF00"><span></span></div>
          <div pixel style="--l: 1; --r: 5; --c: 5; --color: #622DD1"><span></span></div>

          <!-- layer 2 -->
          <div pixel style="--l: 2; --r: 2; --c: 2; --color: #FF9000"><span></span></div>
          <div pixel style="--l: 2; --r: 4; --c: 2; --color: #0000FF"><span></span></div>
          <div pixel style="--l: 2; --r: 2; --c: 4; --color: #FFFF00"><span></span></div>
          <div pixel style="--l: 2; --r: 4; --c: 4; --color: #622DD1"><span></span></div>

          <!-- layer 3-->
          <div pixel style="--l: 3; --r: 3; --c: 3; --color: #DDDDDD"><span></span></div>

          <!-- layer 4-->
          <div pixel style="--l: 4; --r: 2; --c: 2; --color: #90FF00"><span></span></div>
          <div pixel style="--l: 4; --r: 4; --c: 2; --color: #900090"><span></span></div>
          <div pixel style="--l: 4; --r: 2; --c: 4; --color: #009090"><span></span></div>
          <div pixel style="--l: 4; --r: 4; --c: 4; --color: #FF0000"><span></span></div>

          <!-- layer 5-->
          <div pixel style="--l: 5; --r: 1; --c: 1; --color: #90FF00"><span></span></div>
          <div pixel style="--l: 5; --r: 5; --c: 1; --color: #900090"><span></span></div>
          <div pixel style="--l: 5; --r: 1; --c: 5; --color: #009090"><span></span></div>
          <div pixel style="--l: 5; --r: 5; --c: 5; --color: #FF0000"><span></span></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PixelGrid',
  data(){
    return{
    }
  },
  props: {

  }

}
</script>

<style scoped>*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box }


  /* scene set-up */
  [scene], [rotation], [center-z] { display: grid }
  [scene] :not(:empty) { transform-style: preserve-3d }
  [scene] { width: var(--size); perspective: calc(var(--size) * 2); aspect-ratio: 1 }

  /* rotate/animate scene  */
  [rotation][animate="true"] { animation: rotateScene 10s linear infinite }
  @keyframes rotateScene{ to { transform: rotateY(360deg) } }

  /* position contents to z-center */
  [center-z] { transform: translateZ(calc(var(--size) * .5)) }

  /* grid */
  [grid] {
    display: grid;
    grid-template-columns: repeat(var(--dimension), 1fr);
    grid-template-rows: repeat(var(--dimension), 1fr);
  }

  /* pixel */
  [pixel] {
    --pixel-size: calc(var(--size) / var(--dimension));
    grid-row: calc(var(--dimension) - var(--l) + 1);
    grid-column: var(--c);
    transform: translateZ(calc(var(--pixel-size) * (var(--dimension) - var(--r)) * -1));
    background-color: var(--color);
  }
  /* sides set up */
  [pixel], [pixel] > span { display: grid }
  [pixel] > span { background-color: inherit; transform-style: preserve-3d }
  [pixel]::before, [pixel]::after, [pixel] > span::before, [pixel] > span::after { content: ""; background-color: inherit }
  [pixel]::before, [pixel]::after, [pixel] > span, [pixel] > span::before, [pixel] > span::after { grid-column: 1; grid-row: 1 }

  /*sides orientation*/
  [pixel]::before { transform-origin: left; transform: rotateY(90deg) } /*left*/
  [pixel]::after { transform-origin: right; transform: rotateY(-90deg) } /*right*/
  [pixel] > span { transform: translateZ(calc(var(--pixel-size) * -1)) } /*back*/
  [pixel] > span::before { transform-origin: top; transform: rotateX(90deg) } /*top*/
  [pixel] > span::after { transform-origin: bottom; transform: rotateX(-90deg) } /*bottom*/

  /* shading */
  [pixel]::after{ background-image: linear-gradient(rgb(0 0 0 / .25) 100%, transparent) }/*right*/
  [pixel] > span::after { background-image: linear-gradient(rgb(0 0 0 / .375) 100%, transparent) }/*bottom*/

  /*lighting*/
  [pixel]::before { background-image: linear-gradient(rgb(255 255 255 / .25) 100%, transparent) }/*left*/
  [pixel] > span::before { background-image: linear-gradient(rgb(255 255 255 / .375) 100%, transparent) }/*top*/
</style>
