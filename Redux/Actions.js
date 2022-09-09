export default addIssue = (issue) => {
    return {
        type: 'ADD_ISSUE',
        payload: issue,
    }
};