<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-text">
        <p class="greeting">
          <i18n-t keypath="home.greeting" scope="global">
            <template #name><span class="name">Ainhoa</span></template>
          </i18n-t>
        </p>
        <h1 class="headline">{{ t('home.headline') }}</h1>
        <p class="lead">{{ t('home.lead') }}</p>
        <div class="actions">
          <RouterLink :to="{ name: 'projects' }" class="btn btn-primary">
            {{ t('home.ctaProjects') }} <span aria-hidden="true">→</span>
          </RouterLink>
          <RouterLink :to="{ name: 'contact' }" class="btn btn-secondary">
            {{ t('home.ctaContact') }}
          </RouterLink>
        </div>
        <SocialLinks class="hero-social" />
      </div>
      <div class="hero-image">
        <div class="avatar-ring">
          <img src="@/assets/Avatar_web_sin_fondo.jpg" :alt="t('home.avatarAlt')" />
        </div>
      </div>
    </section>

    <!-- What I do -->
    <section class="block">
      <div class="block-head">
        <h2 class="block-title">{{ t('home.whatIDo') }}</h2>
        <RouterLink :to="{ name: 'about' }" class="block-link">
          {{ t('home.moreAbout') }} <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <div class="services">
        <article
          v-for="service in SERVICES"
          :key="service.id"
          class="service"
          :style="{ '--accent': service.accent }"
        >
          <span class="service-icon"><ProjectIcon :name="service.icon" /></span>
          <h3>{{ t(`about.skills.${service.id}.title`) }}</h3>
          <p>{{ t(`about.skills.${service.id}.text`) }}</p>
        </article>
      </div>
    </section>

    <!-- Featured projects -->
    <section class="block">
      <div class="block-head">
        <h2 class="block-title">{{ t('home.featured') }}</h2>
        <RouterLink :to="{ name: 'projects' }" class="block-link">
          {{ t('home.seeAll') }} <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
      <div class="featured-grid">
        <ProjectCard
          v-for="(project, index) in featured"
          :key="project.slug"
          :project="project"
          :index="index"
        />
      </div>
    </section>

    <!-- Stack -->
    <section class="block">
      <h2 class="block-title">{{ t('home.stack') }}</h2>
      <TechStack />
    </section>

    <ContactCTA />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactCTA from '@/components/ContactCTA.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectIcon from '@/components/ProjectIcon.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import TechStack from '@/components/TechStack.vue'
import { localizeProject, projects } from '@/data/projects'
import { skills } from '@/data/skills'

const { t, locale } = useI18n()

// Texts come from `about.skills` in the locale files (shared with the About page)
const SERVICES = skills.filter((group) => group.id !== 'cloud')

const featured = computed(() =>
  projects
    .filter((project) => project.featured)
    .map((project) => localizeProject(project, locale.value)),
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

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.4rem;
  border-radius: 12px;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  color: var(--color-on-accent);
  background-color: var(--color-button);
  box-shadow: 0 8px 20px color-mix(in srgb, var(--color-accent) 35%, transparent);
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
}

.btn-secondary {
  color: var(--color-text-strong);
  outline: 1px solid var(--color-accent);
  outline-offset: -1px;
}

.btn-secondary:hover {
  background-color: color-mix(in srgb, var(--color-accent) 15%, transparent);
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

/* What I do */
.services {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}

.service {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.6rem;
  border-radius: 18px;
  /* --card-tint / --card-accent-outline are 0% in dark, so this is a no-op there */
  background: linear-gradient(
    145deg,
    color-mix(in srgb, var(--accent) var(--card-tint), var(--color-card-gradient-start)),
    var(--color-card-gradient-end)
  );
  box-shadow: var(--shadow-card);
  outline: 1px solid
    color-mix(in srgb, var(--accent) var(--card-accent-outline), var(--color-card-outline));
  outline-offset: -1px;
}

.service-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 0.4rem;
  border-radius: 14px;
  color: var(--accent);
  background-color: color-mix(in srgb, var(--accent) 14%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
}

.service-icon svg {
  width: 26px;
  height: 26px;
}

.service h3 {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-text-strong);
}

.service p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}

/* Featured projects */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
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

  .services,
  .featured-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .home {
    padding: 1rem 0 0;
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
