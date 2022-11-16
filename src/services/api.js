import axios from "axios";
import { selectFields } from "../selectors/selectFields";

export const baseUrl =`https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl =`${baseUrl}newstories.json`;
export const storyUrl =`${baseUrl}item/`;
export const dataIdUrl = ` `


export const getStory = async (storyId) => {
  try{
    const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({data}) => data && selectFields(data));

  return result;
  } catch (err) {
    console.error(err);
  }
};

export const getStoryIds = async () => {
  try {
    const result = await axios
    .get(newStoriesUrl)
    .then(({data}) => data);

  return result;
  } catch (err) {
    console.error(err);
  }
};

export const getComment = async (commentId) => {
  try {
    const result = await axios
      .get(`${storyUrl + commentId}.json`)
      .then(({ data }) => data);

  return result;
  } catch (err) {
    console.error(err);
  }
};

export const getDataId = async (dataId) => {
  try {
    const result = await axios
      .get(`${storyUrl + dataId}.json`)
      .then(({ data }) => data);

  return result;
  } catch (err) {
    console.error(err);
  }
};

