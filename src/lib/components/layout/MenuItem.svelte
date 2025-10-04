<script lang="ts">
  import '../../../app.css'
  import type {Snippet} from 'svelte'
  
  let {
    path,
    text,
    children, // =`<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"> <path fill={iconColor} d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/></svg>`
    iconColor = '#BBB',
    small = false
  }: { path: string, children: Snippet, text?: string, iconColor?: string, small?: boolean } = $props()
  if (!text) {
    text = path.split('/').join(' ')
  }
</script>
<a href={path} class="item">
  <span class="icon {small?'small':'large'}">
    {@render children()}
  </span>
  <span class="text {small?'small':'large'}">{text}</span>
</a>
<style>
  
  .item {
    color: var(--menu-item-color);
    height: 100%;
    @media (max-width: 800px) {
      width: 3rem;
    }
    text-decoration: none;
    
    &:hover {
      background-color: var(--menuHighlight) !important;
    }
    
    .icon {
      :global(svg) {
        margin: 0.5rem 0 0 0.75rem;
        width: 1.5rem;
        height: 1.5rem;
      }
      
      @media (min-width: 800px) {
        display: none;
      }
      &.small {
        display: inline-block;
      }
    }
    
    .text {
      color: var(--menu-item-color);
      align-content: center;
      text-align: center;
      @media (max-width: 800px) {
        position: relative;
        width: 4rem;
        height: 4rem;
        padding: 0.5rem;
        top: 0.7rem;
        background: #000;
        visibility: hidden;
      }
      &.small {
        display: none;
      }
    }
    
    @media (max-width: 800px) {
      &:hover {
        .text {
          position: relative;
          display: inline;
          visibility: visible;
          color: var(--menu-item-color);
          &.small {
            position: absolute;
            height: 1.7rem;
            top: 2rem;
            padding: 0.6rem 0.3rem 0.3rem 0.3rem;
          }
        }
      }
    }
  }
  
  @media (min-width: 800px) {
    a {
      padding: 0.5rem 0.5rem 0 0.5rem;
      align-content: center;
    }
  }
  
 :global(.right) {
   .text {
     color: black;
     position: absolute;
     right: -1rem;
     top: 1.7rem;
     
   }
 }

</style>