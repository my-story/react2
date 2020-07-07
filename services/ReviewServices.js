import http from './BaseServices';

const createReview = (review) => 
  http.post('/reviews/new',review)
    .then((res) => res.data);
  
const reviewVoice = (review) =>
  http.create('/reviews/upload/voicenote',review)
    .then((res) => res.data);

const editReview = (review, id) =>
  http.post(`/reviews/edit/${id}`, review)
    .then((res) => res.data);

const getReview = (id) =>
  http.get(`/reviews/specific/${id}`)
    .then((res) => res.data);

const getReviewAdmin = (id) =>
  http.get(`/reviews/specific/admin/${id}`)
    .then((res) => res.data);

const deleteReview = (user, id) =>
  http.post(`/reviews/delete`, user)
    .then((res) => res);

const voteUp = (influencerId, userId) =>
  http.patch(`/reviews/upvote`, { influencer_id: influencerId, user_id: userId });

const undoVoteUp = (influencerId, userId) =>
  http.patch('/reviews/upvote/undo', { influencer_id: influencerId, user_id: userId });

const voteDown = (influencerId, userId) =>
  http.patch('/reviews/downvote', { influencer_id: influencerId, user_id: userId });

const undoVoteDown = (influencerId, userId) =>
  http.patch('/reviews/downvote/undo', { influencer_id: influencerId, user_id: userId });

export default {
  createReview,
  reviewVoice,
  editReview,
  getReview,
  deleteReview,
  voteUp,
  voteDown,
  undoVoteUp,
  undoVoteDown,
  getReviewAdmin
};
