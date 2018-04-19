# Week 04 Self Assessment

## Guidelines

코드스테이츠는 Assessments 를 통해서도 수강생들이 최근에 학습한 부분들을 얼마나 잘 이해했는지 판단할 수 있습니다.

- Assessment 동안 휴대폰을 사용하지 마세요.
- 코드스테이츠 repo 를 먼저 fork 하고 본인 컴퓨터에 clone 하세요.
- 최소한 매 문제마다 한번씩 커밋을 작성하세요.

  - 팁: 커밋하기전에 예상한것처럼 코드가 작동하는지 쉽게 테스트할 수 있는 크롬 Console, [JSFiddle](https://jsfiddle.net/) 같은 도구를 활용하세요.
- 모든 문제를 최소한 조금이라도 풀려고 시도하세요. 문제에 아무 시도도 하지않고 작업했던 흔적이 없는것보다 코멘트를 몇줄이라도 작성하던가 pseudo-code 를 작성하는게 훨씬 더 좋습니다.
- 제 시간에 맞춰 pull request 를 꼭 제출하세요. 끝나기 최소한 몇분전에 pull request 를 할 시간을 가지세요.
- Assessment 를 마친후에 본인이 생각하기에 잘 이해하지 못한 문제들이 있다고 생각하면, 그 주제에 대해 더 학습할 시간을 가능한 빨리 가지세요.

## Grading Outline

- [ complete] async-word-count
- [ complete] sql-publisher-author-genre
- [ mostly complete] node-express-sequelize

## Using and Referencing Outside Resources

매 문제마다 참고가능한 외부 자료들에 대해서 안내하고 있습니다. Assessment 시간 동안은 언급된 자료 이외의 이전 학습자료, 온라인 자료를 참고하거나 다른 학생들과 의견을 교환하는 것은 금지하고 있습니다. 문제에 대해 궁금한 부분이 있으신 경우에는 help-desk 를 이용해주세요.

## Self-Grading Process

문제들을 다 푼 이후에 Grading Scale 을 참고해서 각각 문제의 Grading Outline 을 pull request 를 보낼때 코멘트에 작성해주세요.

## Submitting Solutions

[Pull Request](https://help.github.com/articles/using-pull-requests). 를 사용해 최종 제출합니다. 아래의 단계를 따라주세요.:

1. 여러분의 fork 에서 Pull Requests 를 선택하고, New pull request 를 생성합니다.
2. Pull Request 의 comment block 에 Grading Outline 을 채워넣고 복사해 붙입니다. Grading Scale 참고
4. `Send pull request` 를 클릭합니다.

---

## Async word count

Inside `async-word-count.js`, complete `getTotalWordCount`. `getTotalWordCount` should pass the combined word count of the files located at `filePathOne` and `filePathTwo` to the `callback` following proper node style convention

- [ ] Be sure to handle errors at each step
- [ ] Do not use promises

### Available Resources for this Prompt

* MDN
* Node docs

## SQL

View the following diagrams created in [WWW SQL Designer](http://ondras.zarovi.cz/sql/demo/), and fill in `sql-publisher-author-genre.js` with the schemas that are appropriate for the following data with the specified relationships:

  * publisher, has many authors, has one genre
  * author, has many publishers, has many genres
  * genre, has many publishers, has many authors

Additionally, write a comment in `sql-publisher-author-genre.js` to explain your choice.


### Publisher - Author

##### Option 0 (below)
![pub_auth_option_0](https://cloud.githubusercontent.com/assets/7968370/17832185/d92e9eea-66b1-11e6-9cd5-752d647cdca2.png)

##### Option 1 (below)
![pub_auth_option_1](https://cloud.githubusercontent.com/assets/7968370/17832184/d92ddafa-66b1-11e6-9394-456a0c7aef8a.png)

##### Option 2 (below)
![pub_auth_option_2](https://cloud.githubusercontent.com/assets/7968370/17832186/d930f708-66b1-11e6-9ad2-c69d4f4bc632.png)

##### Option 3 (below)
![pub_auth_option_3](https://cloud.githubusercontent.com/assets/7968370/17832188/d933b1c8-66b1-11e6-84ec-2bd71870eb70.png)

##### Option 4 (below)
![pub_auth_option_4](https://cloud.githubusercontent.com/assets/7968370/17832187/d9332c26-66b1-11e6-8e0b-a6b6ca21a871.png)

##### Option 5 (below)
![pub_auth_option_5](https://cloud.githubusercontent.com/assets/7968370/17832189/d933f282-66b1-11e6-8dca-24561dc2cfd6.png)

##### Option 6 (below)
![pub_auth_option_6](https://cloud.githubusercontent.com/assets/7968370/17832190/d9434962-66b1-11e6-9caa-ba97d3c1647d.png)


### Publisher - Genre

##### Option 0 (below)
![pub_gen_option_0](https://cloud.githubusercontent.com/assets/7968370/17832207/4b415108-66b2-11e6-9539-421025df2a74.png)

##### Option 1 (below)
![pub_gen_option_1](https://cloud.githubusercontent.com/assets/7968370/17832209/4b4283e8-66b2-11e6-8851-73d2d7ec825c.png)

##### Option 2 (below)
![pub_gen_option_2](https://cloud.githubusercontent.com/assets/7968370/17832212/4b4e4fd4-66b2-11e6-8a7a-4691a4096e08.png)

##### Option 3 (below)
![pub_gen_option_3](https://cloud.githubusercontent.com/assets/7968370/17832211/4b45344e-66b2-11e6-874d-94c7d7d0e5af.png)

##### Option 4 (below)
![pub_gen_option_4](https://cloud.githubusercontent.com/assets/7968370/17832208/4b42819a-66b2-11e6-83c4-7346027f4fcb.png)

##### Option 5 (below)
![pub_gen_option_5](https://cloud.githubusercontent.com/assets/7968370/17832210/4b42e176-66b2-11e6-8734-2e4081b5acf4.png)

##### Option 6 (below)
![pub_gen_option_6](https://cloud.githubusercontent.com/assets/7968370/17832213/4b53b8c0-66b2-11e6-8068-e41a67f7118d.png)

### Author - Genre

##### Option 0 (below)
![auth_gen_option_0](https://cloud.githubusercontent.com/assets/7968370/17832222/71bf003c-66b2-11e6-9e93-2a1b17108bd7.png)

##### Option 1 (below)
![auth_gen_option_1](https://cloud.githubusercontent.com/assets/7968370/17832221/71bf1752-66b2-11e6-9970-fee5341aa887.png)

##### Option 2 (below)
![auth_gen_option_2](https://cloud.githubusercontent.com/assets/7968370/17832218/71bc003a-66b2-11e6-9977-319fcc5b88d2.png)

##### Option 3 (below)
![auth_gen_option_3](https://cloud.githubusercontent.com/assets/7968370/17832219/71bd98fa-66b2-11e6-9bdd-48a9a99340b5.png)

##### Option 4 (below)
![auth_gen_option_4](https://cloud.githubusercontent.com/assets/7968370/17832220/71bee214-66b2-11e6-8d9f-a0f6dea208e0.png)

##### Option 5 (below)
![auth_gen_option_5](https://cloud.githubusercontent.com/assets/7968370/17832217/71bbcf16-66b2-11e6-8ade-b6eba76102aa.png)

##### Option 6 (below)
![auth_gen_option_6](https://cloud.githubusercontent.com/assets/7968370/17832223/71d0e1da-66b2-11e6-9cb8-3983bcb81118.png)


### Available resources during this prompt

* [junction tables](https://en.wikipedia.org/wiki/Junction_table)
* This [SQL Wikipedia page](https://en.wikipedia.org/wiki/SQL)

## Node Express Sequelize
* [ ] Create a '/users' route that responds to a GET request and
* [ ] Uses the provided Sequelize `User` model to send all `users` currently in the database

## Available resources for this prompt:
* MDN
* Express Docs
* Sequelize Docs
