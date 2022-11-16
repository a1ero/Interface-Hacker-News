import React from "react";
import  { App } from "../App";
import { cleanup, render, waitForElement } from "@testing-library/react";
import { storyIds,  storySingular} from "../fixtures";
import { getStory,  getStoryIds} from "../services/api";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { INCREMENT_STORY } from "../constants";

beforeEach(cleanup);

jest.mock('../hooks/useInfiniteScroll.js');

jest.mock('../services/api', () => ({
    getStory: jest.fn(),
    getStoryIds: jest.fn(),
}));

test('renders the application', async() => {
    useInfiniteScroll.mockImplementation(() => ({
        count: INCREMENT_STORY
    }));
    getStory.mockImplementation(() => Promise.resolve(storySingular));
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

    const { getByText, queryByTestId } = render (<App />);
    await waitForElement (() => [
        expect(getByText('')).toBeTruthy(),
        expect(getByText('Title: Lorem dolor.')).toBeTruthy(),
        expect(queryByTestId('story-by').textContent).toEqual('By: Test Test'), 
    ]);
});