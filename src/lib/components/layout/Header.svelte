<script>
  import {txt} from '../../config/text/us-en.js'
  import MenuItem from './MenuItem.svelte'
  import '../../../app.css'
  // leaf icon https://thenounproject.com/icon/leaf-8014660/?utm_source=nounproject&utm_campaign=icon_match&utm_content=match_page
</script>
<header class="header">
  <MenuItem path="/" text={txt.home}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
      <!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE -->
      <g fill="none" stroke="var(--menu-icon-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
        <path
          d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </g>
    </svg>
  </MenuItem>
  <!--  <MenuItem path="/mo/conditionCategories" text={txt.conditionCategories}>-->
  <!--    <svg id="Layer_3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path fill="var(&#45;&#45;menu-icon-color)" d="m9 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm15 16v2h-2.465l-2.659 3.988-3-6-1.341 2.012h-3.535v-2h2.465l2.659-3.988 3 6 1.341-2.012zm-11.606-2h-7.394c-1.654 0-3 1.346-3 3v5h-2v-5c0-2.757 2.243-5 5-5h8c.233 0 .457.038.682.069l-1.287 1.931z"/></svg>-->
  <!--  </MenuItem>-->
  <MenuItem path="/mo/categories" text={txt.categories}>
    <svg fill="var(--menu-icon-color" viewBox="0 0 45 55" xmlns="http://www.w3.org/2000/svg">
      <path fill="var(--menu-icon-color)"
            d="m9 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm15 16v2h-2.465l-2.659 3.988-3-6-1.341 2.012h-3.535v-2h2.465l2.659-3.988 3 6 1.341-2.012zm-11.606-2h-7.394c-1.654 0-3 1.346-3 3v5h-2v-5c0-2.757 2.243-5 5-5h8c.233 0 .457.038.682.069l-1.287 1.931z"/>
      <path fill="var(--menu-icon-color)"
            d="m38 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm15 16v2h-2.465l-2.659 3.988-3-6-1.341 2.012h-3.535v-2h2.465l2.659-3.988 3 6 1.341-2.012zm-11.606-2h-7.394c-1.654 0-3 1.346-3 3v5h-2v-5c0-2.757 2.243-5 5-5h8c.233 0 .457.038.682.069l-1.287 1.931z"/>
      <path fill="var(--menu-icon-color)"
            d="m9 42c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm15 16v2h-2.465l-2.659 3.988-3-6-1.341 2.012h-3.535v-2h2.465l2.659-3.988 3 6 1.341-2.012zm-11.606-2h-7.394c-1.654 0-3 1.346-3 3v5h-2v-5c0-2.757 2.243-5 5-5h8c.233 0 .457.038.682.069l-1.287 1.931z"/>
      <path fill="var(--menu-icon-color)"
            d="m38 42c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm15 16v2h-2.465l-2.659 3.988-3-6-1.341 2.012h-3.535v-2h2.465l2.659-3.988 3 6 1.341-2.012zm-11.606-2h-7.394c-1.654 0-3 1.346-3 3v5h-2v-5c0-2.757 2.243-5 5-5h8c.233 0 .457.038.682.069l-1.287 1.931z"/>
    </svg>
  </MenuItem>
  <MenuItem path="/mo/indications" text={txt.indications}>
    <svg id="Layer_3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
      <path fill="var(--menu-icon-color)"
            d="m9 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm15 16v2h-2.465l-2.659 3.988-3-6-1.341 2.012h-3.535v-2h2.465l2.659-3.988 3 6 1.341-2.012zm-11.606-2h-7.394c-1.654 0-3 1.346-3 3v5h-2v-5c0-2.757 2.243-5 5-5h8c.233 0 .457.038.682.069l-1.287 1.931z"/>
    </svg>
  </MenuItem>
  <MenuItem path="/mo/indicationSupplements" text={txt.indicationSupplements}>
    <span class="indicationSupplementIcon">
      <svg id="Layer_3" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
      <path fill="var(--menu-icon-color)"
            d="m9 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm15 16v2h-2.465l-2.659 3.988-3-6-1.341 2.012h-3.535v-2h2.465l2.659-3.988 3 6 1.341-2.012zm-11.606-2h-7.394c-1.654 0-3 1.346-3 3v5h-2v-5c0-2.757 2.243-5 5-5h8c.233 0 .457.038.682.069l-1.287 1.931z"/>
    </svg>
    <svg id="Layer_3" viewBox="2 0 22 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
      <path opacity="0.1"
            d="M4.44905 17.0091C-0.246262 7.83768 7.34063 0.686186 19.5547 3.61251C20.4161 3.81888 21.0082 4.6099 20.9652 5.49458C20.5863 13.288 17.0342 17.7048 6.13264 17.9858C5.43034 18.0039 4.7692 17.6344 4.44905 17.0091Z"
            fill="var(--menu-icon-color)"/> <path
      d="M4.44905 17.0091C-0.246262 7.83768 7.34063 0.686186 19.5547 3.61251C20.4161 3.81888 21.0082 4.6099 20.9652 5.49458C20.5863 13.288 17.0342 17.7048 6.13264 17.9858C5.43034 18.0039 4.7692 17.6344 4.44905 17.0091Z"
      stroke="var(--menu-icon-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path
      d="M3.99987 21C5.49993 15.5 5.99988 12.5 11.9998 9.99997" stroke="var(--menu-icon-color)" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </span>
  </MenuItem>
  <MenuItem path="/mo/indicationSupplementStudies" text={txt.indicationSupplementStudies}>
    <span class="indicationSupplementStudiesIcon">
      <svg id="Layer_3" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
      <path fill="var(--menu-icon-color)"
            d="m9 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm15 16v2h-2.465l-2.659 3.988-3-6-1.341 2.012h-3.535v-2h2.465l2.659-3.988 3 6 1.341-2.012zm-11.606-2h-7.394c-1.654 0-3 1.346-3 3v5h-2v-5c0-2.757 2.243-5 5-5h8c.233 0 .457.038.682.069l-1.287 1.931z"/>
    </svg>
    <svg id="Layer_3" viewBox="2 0 22 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
      <path opacity="0.1"
            d="M4.44905 17.0091C-0.246262 7.83768 7.34063 0.686186 19.5547 3.61251C20.4161 3.81888 21.0082 4.6099 20.9652 5.49458C20.5863 13.288 17.0342 17.7048 6.13264 17.9858C5.43034 18.0039 4.7692 17.6344 4.44905 17.0091Z"
            fill="var(--menu-icon-color)"/> <path
      d="M4.44905 17.0091C-0.246262 7.83768 7.34063 0.686186 19.5547 3.61251C20.4161 3.81888 21.0082 4.6099 20.9652 5.49458C20.5863 13.288 17.0342 17.7048 6.13264 17.9858C5.43034 18.0039 4.7692 17.6344 4.44905 17.0091Z"
      stroke="var(--menu-icon-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path
      d="M3.99987 21C5.49993 15.5 5.99988 12.5 11.9998 9.99997" stroke="var(--menu-icon-color)" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
      <!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE -->
      <path fill="none" stroke="var(--menu-icon-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z"/>
    </svg>
    </span>
  </MenuItem>
  <MenuItem path="/mo/supplements" text={txt.supplements}>
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.1"
            d="M4.44905 17.0091C-0.246262 7.83768 7.34063 0.686186 19.5547 3.61251C20.4161 3.81888 21.0082 4.6099 20.9652 5.49458C20.5863 13.288 17.0342 17.7048 6.13264 17.9858C5.43034 18.0039 4.7692 17.6344 4.44905 17.0091Z"
            fill="var(--menu-icon-color)"/>
      <path
        d="M4.44905 17.0091C-0.246262 7.83768 7.34063 0.686186 19.5547 3.61251C20.4161 3.81888 21.0082 4.6099 20.9652 5.49458C20.5863 13.288 17.0342 17.7048 6.13264 17.9858C5.43034 18.0039 4.7692 17.6344 4.44905 17.0091Z"
        stroke="var(--menu-icon-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.99987 21C5.49993 15.5 5.99988 12.5 11.9998 9.99997" stroke="var(--menu-icon-color)" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </MenuItem>
  <MenuItem path="/mo/studies" text={txt.studies}>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
      <!-- Icon from Lucide by Lucide Contributors - https://github.com/lucide-icons/lucide/blob/main/LICENSE -->
      <path fill="none" stroke="var(--menu-icon-color)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z"/>
    </svg>
  </MenuItem>

  <div class="right">
    <MenuItem path="/profile" text={txt.profile} small>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
        <g id="_01_align_center" data-name="01 align center">
          <path fill="var(--menu-icon-color)"
                d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"/>
          <path fill="var(--menu-icon-color)"
                d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"/>
        </g>
      </svg>
    </MenuItem>

  </div>
</header>
<style>

    .header {
        align-items: center;
        background: #000;
        display: flex;
        height: 2.5em;
        padding: 0 1rem;
        position: sticky;
        width: 100%;
        top: 0;
        z-index: 10;

        .right {
            position: absolute;
            right: 2.5rem;
        }
    }

    .indicationSupplementIcon {
        display: flex;
        /*margin: 0 -0.4rem;*/
        width: 2.8rem;
        svg:nth-child(1) {
            margin-left: 0.6rem;
        }
        svg:nth-child(2) {
            margin-left: -0.4rem;
        }
    }

    .indicationSupplementStudiesIcon {
        display: flex;
        /*margin: 0 -0.4rem;*/
        width: 2.8rem;

        svg:nth-child(1) {
            margin-left: 0.1rem;
            display: none
        }

        svg:nth-child(2) {
            margin-left: 0.7rem;
        }

        svg:nth-child(3) {
            margin-left: -0.4rem;
        }
    }
    .right {
        display: none;
    }

</style>
