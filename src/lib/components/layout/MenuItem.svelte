<script lang="ts">
    import '../../../app.css'
    import type {Snippet} from 'svelte'
    import {page} from '$app/state'

    let {
        path,
        text,
        children, // =`<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"> <path fill={iconColor} d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/></svg>`
        iconColor = '#BBB',
        small = false
    }: { path: string, children: Snippet, text?: string, iconColor?: string, small?: boolean } = $props()
    text = (() => text || path.split('/').join(' '))()

    let selected = $derived(page.url.pathname === path)
    // console.log(`==> MenuItem.svelte:17 path `, page.url.pathname, path)
    let clicked = false
    const onClick = () => {
        clicked = true
        setTimeout(() => clicked = false, 1000)
    }
</script>
<a href={path} class="item ${selected?'selected':'notSelected'}" onclick={onClick}>
  <span class="icon {small?'small':'large'} {selected?'selected':''}"
        style="{selected?'--menu-icon-color: var(--menu-selected-color)':''};">
    {@render children()}
  </span>
    <span class="text {small?'small':'large'} {selected?'selected':'notSelected'}">{text}</span>
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
            background-color: var(--menu-highlight-color);
        }

        &:hover {
            @media (min-width: 800px) {
                color: var(--menu-highlight-color)
            }
        }

        .text.selected {
            @media (min-width: 800px) {
                color: var(--menu-selected-color)
            }
        }
    }

    .icon {
        :global(svg) {
            margin: 0.5rem 0 0 0.75rem;
            width: 1.5rem;
            height: 1.5rem;

            &.selected {
                color: var(--menu-highlight-color)
            }
        }

        @media (min-width: 800px) {
            display: none;
        }

        &.small {
            display: inline-block;
        }
    }

    .item:hover .text.notSelected {
        @media (max-width: 800px) {

            visibility: visible;
            display: table-cell;
            position: relative;
            color: var(--menu-item-color);
            top: -0.2rem;
            z-index: -3;
            height: 4rem;
            transition: top 100ms cubic-bezier(0, 0, 0.9, 1);
            /*transition: height 200ms cubic-bezier(0, 0.1, 0.9, 1);*/
            &.small {
                position: absolute;
                height: 1.7rem;
                top: 2rem;
                padding: 0.6rem 0.3rem 0.3rem 0.3rem;
            }
        }
    }


    .item .text {
        color: var(--menu-item-color);
        /*!*align-content: center;*!*/
        /*text-align: center;*/
        @media (max-width: 800px) {
            display: block;
            position: relative;
            width: 4rem;
            height: 0;
            padding: 0.5rem 1rem;
            line-height: 1.5rem;
            /*top: -3.5rem;*/
            background: #000;
            /*visibility: hidden;*/
            top: -8rem;
            justify-self: anchor-center;
        }

        &.small {
            display: none;
        }
    }

    @media (min-width: 800px) {
        a {
            padding: 0.1rem 0.5rem 0 0.5rem;
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
