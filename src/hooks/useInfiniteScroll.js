/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import { MAX_STORIES, INCREMENT_STORY } from '../constants';
import { debounce } from '../utils/debounce';

export const useInfiniteScroll = () => {
    const [ loading, setLoading] = useState(false);
    const [ count, setCount] = useState(INCREMENT_STORY);

    const handleScroll = debounce(() => {
        if 
        (window.innerHeight + document.documentElement.scrollTop !== 
            document.documentElement.offsetHeight || 
        loading) {
            return false;
        }
        setLoading(true);
    }, 500);

    useEffect(() => {
        if (!loading) return;

        if (count + INCREMENT_STORY >= MAX_STORIES){
            setCount(MAX_STORIES);
        } else {
            setCount(count + INCREMENT_STORY);
        }

        setLoading(false);
    }, [loading]);

    useEffect (() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return {count};
};