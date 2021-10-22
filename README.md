# nodejs

참고 : https://thebook.io/080203/ch21/

```

- POST /posts
> 포스트 작성

- GET /posts
> 포스트 목록 조회

- GET /posts/:id
> 특정 포스트 조회

- DELETE /posts/:id
> 특정 포스트 삭제

- PATCH /posts/:id
> 특정 포스트 업데이트(구현 방식에 따라 PUT으로도 사용 가능)

- POST /posts/:id/comments
> 특정 포스트에 덧글 등록

- GET /posts/:id/comments
> 특정 포스트의 덧글 목록 조회

- DELETE /posts/:id/comments/:commentId
> 특정 포스트의 특정 덧글 삭제
```

## mongoDB

window버전 설치

- 설치주소 : https://www.mongodb.com/try/download/community
- 가이드 : https://thebook.io/080203/ch22/02-01/

```
yarn add mongoose dotenv
```

- mongoose는 Node.js 환경에서 사용하는 MongoDB 기반 ODM(Object Data Modelling) 라이브러리
- dotenv는 환경변수들을 파일에 넣고 사용할 수 있게 하는 개발 도구
