import type { StateData } from '../types';
import { STATES_A } from './states-a';
import { STATES_B } from './states-b';
import { STATES_C } from './states-c';

/** 各州落地指南：12 个州，数据于 2026-11-04 在各州政府网站核对。 */
export const STATES: StateData[] = [...STATES_A, ...STATES_B, ...STATES_C];

export const STATE_BY_SLUG: Record<string, StateData> = Object.fromEntries(STATES.map((s) => [s.slug, s]));
