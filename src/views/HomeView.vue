<template>
  <div class="home">
    <!-- Hero -->
    <section id="home" class="hero">
      <div class="hero-text">
        <p class="greeting">
          <i18n-t keypath="home.greeting" scope="global">
            <template #name><span class="name">Ainhoa</span></template>
          </i18n-t>
        </p>
        <h1 class="headline">{{ t('home.headline') }}</h1>
        <p class="lead">{{ t('home.lead') }}</p>
        <div class="actions">
          <a href="#contact" class="btn" @click.prevent="scrollToSection('contact')">
            {{ t('home.ctaContact') }} <span class="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#projects" class="btn btn-quiet" @click.prevent="scrollToSection('projects')">
            {{ t('home.ctaProjects') }}
          </a>
        </div>
        <SocialLinks class="hero-social" />
      </div>
      <div class="hero-image">
        <div class="avatar-ring">
          <img src="@/assets/Avatar_web_sin_fondo.jpg" :alt="t('home.avatarAlt')" />
        </div>
      </div>
    </section>

    <!--
      Light bands: data-theme swaps every color token inside (theme.css).
      Services and How I work are both for clients, so they share one band.
    -->
    <div class="band band-group" data-theme="light">
      <section id="services" class="section">
        <ServicesSection />
      </section>

      <section id="process" class="section">
        <ProcessSection />
      </section>
    </div>

    <section id="projects" class="section">
      <div class="block-head">
        <h2 class="block-title">{{ t('home.featured') }}</h2>
        <RouterLink :to="{ name: 'projects' }" class="block-link">
          {{ t('home.seeAll') }} <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <!-- Every project, compact; each opens its own page -->
      <div class="project-grid">
        <ProjectTile v-for="project in allProjects" :key="project.slug" :project="project" />
      </div>
    </section>

    <section id="about" class="section band" data-theme="light">
      <AboutSection />
    </section>

    <section id="contact" class="section">
      <ContactCard />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactCard from '@/components/ContactCard.vue'
import ProjectTile from '@/components/ProjectTile.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import { scrollToSection, useSectionSpy } from '@/composables/useSections'
import { localizeProject, projects } from '@/data/projects'

const { t, locale } = useI18n()

// One-page Home: the navbar highlights the section in view
useSectionSpy()

// Same order as the Projects page (src/data/projects/index.js)
const allProjects = computed(() =>
  projects.map((project) => localizeProject(project, locale.value)),
)
</script>

<style scoped>
.home {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

/*
 * Light bands. The section keeps the content width; its background spans the
 * whole viewport (left/right reach the screen edges; body clips the overflow).
 * Colors come from the light tokens because of data-theme="light".
 */
.band {
  position: relative;
  isolation: isolate;
  padding-block: 5rem;
  color: var(--color-text);
}

/* Two sections in one band: same spacing as between sections */
.band-group {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.band::before {
  content: '';
  position: absolute;
  inset: 0 calc(50% - 50vw);
  z-index: -1;
  background: var(--page-backdrop), var(--color-bg);
}

/* ===== Hero ===== */
.hero {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  align-items: center;
  gap: 2rem;
  padding: 3.5rem 3rem;
  border-radius: 28px;
  background:
    radial-gradient(color-mix(in srgb, var(--color-accent) 22%, transparent) 1px, transparent 1.5px)
      0 0 / 22px 22px,
    radial-gradient(
      circle at 85% 30%,
      color-mix(in srgb, var(--color-accent) 30%, transparent),
      transparent 55%
    ),
    radial-gradient(
      circle at 10% 100%,
      color-mix(in srgb, #0ea5e9 14%, transparent),
      transparent 50%
    ),
    linear-gradient(135deg, var(--color-card-gradient-start), var(--color-card-gradient-end));
  outline: 1px solid color-mix(in srgb, var(--color-accent) 30%, transparent);
  outline-offset: -1px;
  box-shadow: var(--shadow-card);
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.greeting {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
}

.name {
  font-weight: 700;
  color: var(--color-accent-soft);
}

.headline {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.2px;
  color: var(--color-text-strong);
}

.lead {
  max-width: 52ch;
  font-size: clamp(1.02rem, 1.8vw, 1.15rem);
  line-height: 1.65;
  color: var(--color-text-muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.hero-social {
  margin-top: 0.75rem;
}

.hero-image {
  display: flex;
  justify-content: center;
}

.avatar-ring {
  width: min(320px, 100%);
  aspect-ratio: 1;
  padding: 6px;
  border-radius: 50%;
  background: conic-gradient(
    from 200deg,
    var(--color-accent),
    #0ea5e9,
    var(--color-accent-soft),
    var(--color-accent)
  );
  box-shadow: 0 20px 60px color-mix(in srgb, var(--color-accent) 35%, transparent);
}

.avatar-ring img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 35%, #2b2050, #120f24);
}

/* ===== Blocks ===== */
.block-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.block-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  font-weight: 700;
  color: var(--color-text-strong);
  margin-bottom: 1.5rem;
}

.block-title::after {
  content: '';
  display: block;
  width: 44px;
  height: 4px;
  margin-top: 0.5rem;
  border-radius: 2px;
  background: var(--title-bar);
}

.block-link {
  font-weight: 600;
  color: var(--color-accent-soft);
}

.block-link span {
  display: inline-block;
  transition: transform 0.2s ease;
}

.block-link:hover span {
  transform: translateX(4px);
}

/* Projects: compact grid with all of them */
.project-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.75rem;
    text-align: left;
  }

  .hero-image {
    order: -1;
    justify-content: flex-start;
  }

  .avatar-ring {
    width: 160px;
  }

  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .home {
    padding: 1rem 0 0;
    gap: 3.5rem;
  }

  .band {
    padding-block: 3.5rem;
  }

  .band-group {
    gap: 3.5rem;
  }

  .hero {
    padding: 2rem 1.4rem;
  }

  .headline {
    font-size: clamp(1.8rem, 8vw, 2.2rem);
    overflow-wrap: break-word;
  }
}
</style>
