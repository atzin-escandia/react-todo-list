export const FILTER_BUTTONS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const FILTER_BUTTONS = {
  [TODO.FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  }
}