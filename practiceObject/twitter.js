
var Twitter = function () {
    this.tweets = [];
    this.followers = {};
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */

Twitter.prototype.postTweet = function (userId, tweetId) {
    this.tweets.push({ userId, tweetId });
    if (!this.followers[userId]) {
        this.followers[userId] = [userId];
    }
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let tweet = this.tweets.filter(tweet => this.followers[userId].includes(tweet.userId));
    return tweet.map(tweet => tweet.tweetId)

};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.followers[followerId]) {
        this.followers[followerId] = [followerId];
    }

    this.followers[followerId].push(followeeId);

};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    this.followers[followerId] = this.followers[followerId].filter(id => id !== followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// Time complexity: O(1) for all operations
// Space complexity: O(n) where n is the number of tweets

var twitter = new Twitter(); // create an instance of Twitter
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1)); // [5]
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1)); // [6, 5]
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1)); // [5]