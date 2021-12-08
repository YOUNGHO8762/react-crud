<img width="1425" alt="스크린샷 2021-12-08 오후 3 31 34" src="https://user-images.githubusercontent.com/79790476/145160031-5c9e8b29-dab7-4c78-96a7-2b13917d6491.png">

### <a href="https://youtu.be/_I6nM08c6E4">🎥 시연영상 보러가기</a>

<br>

json-server를 이용해 게시판 crud를 구현하였습니다.

- 개발기간 : 2021/10/22 ~ 2021/10/26

## 적용 기술

- react.js <br>
- context api <br>
- styled-components<br>
- axios<br>
- rc-pagination<br>
- json-server
  <br>

## 구현 기능

- 로그인 / 로그아웃
- 검색
- 글 쓰기 / 읽기 / 수정 / 삭제

## 시작 방법

### json-server

```
npm i -g json-server
```

json-server를 설치합니다.

```
{
  "forum": [
    {
      "id": 1,
      "title": "게시글1 ",
      "content": "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
      "isLiked": false,
      "tag": {
        "name": "bug",
        "color": "#ff1357"
      }
    },
    {
      "id": 2,
      "title": "게시글2",
      "content": "비록 해가 진다고 해도, 나에게는 전기불이 있다.",
      "isLiked": true,
      "tag": {
        "name": "tip",
        "color": "#ff1357"
      }
    },
    {
      "id": 3,
      "title": "게시글3",
      "content": "웃음이 없는 하루는 버린 하루다.",
      "isLiked": true,
      "tag": {
        "name": "general",
        "color": "#ff1357"
      }
    },
    {
      "id": 4,
      "title": "게시글4",
      "content": "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다.",
      "isLiked": false,
      "tag": {
        "name": "learn",
        "color": "#ff1357"
      }
    },
    {
      "id": 5,
      "title": "게시글5",
      "content": "변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다. 우리 자신이 우리가 기다리던 사람이고 우리가 바로 우리가 추구하는 변화이다.",
      "isLiked": true,
      "tag": {
        "name": "bug",
        "color": "#ff1357"
      }
    },
    {
      "id": 6,
      "title": "게시글6",
      "content": "무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다.",
      "isLiked": false,
      "tag": {
        "name": "learn",
        "color": "#ff1357"
      }
    },
    {
      "id": 7,
      "title": "게시글7",
      "content": "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다.",
      "isLiked": false,
      "tag": {
        "name": "tip",
        "color": "#ff1357"
      }
    },
    {
      "id": 8,
      "title": "게시글8",
      "content": "남들이 할 수 있거나 하려는 일을 하지 말고 남들이 할 수 없거나 하지 않으려는 일을 하라",
      "isLiked": true,
      "tag": {
        "name": "bug",
        "color": "#ff1357"
      }
    },
    {
      "id": 9,
      "title": "게시글9",
      "content": "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
      "isLiked": false,
      "tag": {
        "name": "learn",
        "color": "#ff1357"
      }
    },
    {
      "id": 10,
      "title": "게시글10",
      "content": "행동은 모든 성공의 가장 기초적인 핵심이다.",
      "isLiked": true,
      "tag": {
        "name": "bug",
        "color": "#ff1357"
      }
    },
    {
      "id": 11,
      "title": "게시글11",
      "content": "용기란 죽을만큼 두려워도 무언가 해보는 것이다.",
      "isLiked": false,
      "tag": {
        "name": "bug",
        "color": "#ff1357"
      }
    },
    {
      "id": 12,
      "title": "게시글12",
      "content": "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라.",
      "isLiked": true,
      "tag": {
        "name": "general",
        "color": "#ff1357"
      }
    },
    {
      "id": 13,
      "title": "게시글13",
      "content": "무언가를 위해 죽을 각오가 없다면, 인생을 살게 해줄 무언가도 가질 수 없을 것이다.",
      "isLiked": true,
      "tag": {
        "name": "tip",
        "color": "#ff1357"
      }
    },
    {
      "id": 14,
      "title": "게시글14",
      "content": "승리는 가장 끈기 있는 사람에게 돌아간다.",
      "isLiked": true,
      "tag": {
        "name": "general",
        "color": "#ff1357"
      }
    },
    {
      "title": "글쓰기",
      "content": "노력하는 사람에게 불가능이란 없다.",
      "isLiked": false,
      "tag": {
        "name": "bug",
        "color": "#ff1357"
      },
      "id": 15
    },
    {
      "id": 16,
      "title": "수정",
      "content": "인생에서 실패한 사람의 대부분은 성공이 눈앞에 왔는데도 모르고 포기한 사람들이다.",
      "isLiked": false,
      "tag": {
        "name": "bug",
        "color": "#ff1357"
      }
    }
  ],
  "login": [
    {
      "id": 1,
      "email": "test@gmail.com",
      "password": "passpassplz",
      "username": "test"
    }
  ]
}
```

db.json 파일을 생성하여 위에 mock-data를 붙여 넣습니다. <br>

```
json-server --watch db.json --port 3001
```

json-server 를 실행합니다.

<hr>

### Project

```
npm install
```

패키지들을 설치해 줍니다.

```
npm start
```

프로젝트를 실행합니다.

<br>
