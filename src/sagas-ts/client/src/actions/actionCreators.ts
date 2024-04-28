import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_SUCCESS,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
} from "./actionTypes";

export interface ISkill {
  id: number;
  name: string;
}

export interface ISkills {
  items: ISkill;
}

export function searchSkillsRequest(search: string) {
  return { type: SEARCH_SKILLS_REQUEST, payload: { search } };
}

export function searchSkillsSuccess(items: ISkills) {
  return { type: SEARCH_SKILLS_SUCCESS, payload: { items } };
}

export function searchSkillsFailure(error: string) {
  return { type: SEARCH_SKILLS_FAILURE, payload: { error } };
}

export function changeSearchField(search: string) {
  return { type: CHANGE_SEARCH_FIELD, payload: { search } };
}
