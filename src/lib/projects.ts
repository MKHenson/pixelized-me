import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** Project header artwork, cycled in list order so neighbouring projects never share one. */
export const HEADER_ART = ['sunrise', 'skull', 'fan', 'ziggurat', 'arches'] as const;

const statusLabels: Record<Project['data']['status'], string> = {
  released: 'Released',
  'in-development': 'In development',
  prototype: 'Prototype',
  archived: 'Archived',
};

export function statusLabel(project: Project) {
  return statusLabels[project.data.status];
}

export function yearsOf(project: Project) {
  const { year, yearEnd, status } = project.data;
  if (yearEnd && yearEnd !== year) return `${year}–${yearEnd}`;
  if (status === 'in-development') return `${year}–now`;
  return `${year}`;
}

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.year - a.data.year || a.data.order - b.data.order);
}

export async function getFeaturedProjects(count: number) {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.data.featured).sort((a, b) => a.data.order - b.data.order);
  const rest = projects.filter((p) => !p.data.featured);
  return [...featured, ...rest].slice(0, count);
}
