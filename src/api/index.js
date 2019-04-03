
export const fetchRedditsApi = (cateogry) => fetch(`https://www.reddit.com/r/${cateogry}.json?raw_json=1`);