# Bitcoin Blockchain

채굴, 코인 거래 기능을 직접 구현하며 비트코인 블록체인 동작 원리를 학습하는 프로젝트입니다.


| 기간 | 내용 |
|------|------|
| 2022-01-06 ~ 2022-01-28 | 1차 연습, 22일 |
| 2022-01-29 ~ 2022-02-07 | 2차 실전, 10일 |
| 2026-04-27 ~ | pnpm 모노레포 리팩토링 |

## 기술 스택

| 분류 | 기술 |
|------|------|
| **Monorepo** | ![Nx](https://img.shields.io/badge/Nx-143055?style=flat-square&logo=nx&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white) |
| **Client** | ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![MUI](https://img.shields.io/badge/MUI_v9-007FFF?style=flat-square&logo=mui&logoColor=white) |
| **Server** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=flat-square) |

## 프로젝트 구조

```
apps/
├── client/               # React + Vite
│   └── src/
│       ├── components/   # 재사용 UI 컴포넌트
│       ├── layout/       # 공통 레이아웃
│       ├── pages/        # 페이지 진입점
│       ├── routes/       # 라우팅 설정
│       └── themes/       # MUI 테마
└── server/               # Express + WebSocket
    └── blockchain/       # 블록체인 핵심 로직
```

## 실행 방법

### 의존성 설치

```bash
pnpm install
```

### 개발 서버 실행 (클라이언트 + 서버)

```bash
pnpm dev
```

### 개별 실행

```bash
pnpm server   # 서버만 (HTTP :4000 / P2P :6000)
pnpm client   # 클라이언트만 (:3000)
```

### 다중 노드 실행 (P2P 테스트)

```bash
# 터미널 1 (기본 노드)
pnpm dev

# 터미널 2 (피어 노드 1)
nx run @bitcoin-blockchain/client:peer1   # :3001 / HTTP :4001

# 터미널 3 (피어 노드 2)
nx run @bitcoin-blockchain/client:peer2   # :3002 / HTTP :4002
```

## API

| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/api/blocks` | 전체 블록 목록 |
| POST | `/api/mineBlock` | 블록 수동 채굴 |
| POST | `/api/miningBlock` | 블록 자동 채굴 |
| GET | `/api/address` | 내 지갑 주소 |
| GET | `/api/balance` | 내 잔액 |
| GET | `/api/address/:address` | 특정 주소 잔액 |
| POST | `/api/addtransactions` | 코인 송금 |
| GET | `/api/transactionPool` | 미처리 트랜잭션(mempool) |
| GET | `/api/myUnspentTransaction` | 내 UTXO |
| GET | `/api/myMempool` | 내 미처리 트랜잭션 |
| GET | `/api/peers` | 연결된 피어 목록 |
| POST | `/api/addPeers` | 피어 연결 |
| GET | `/api/utxos` | 전체 UTXO |

## 블로그 정리

| No. | 주제 | 블로그 |
|----:|------|------|
| 1 | BlockChain 만들기 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/66?category=1048753) |
| 2 | 새 블록 검증 과정 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/67?category=1048753) |
| 3 | HTTP 웹 서버 구축 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/68?category=1048753) |
| 4 | WebSocket 서버 구축 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/80?category=1048753) |
| 5 | POW 구현 ① | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/81?category=1048753) |
| 6 | POW 구현 ② | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/83?category=1048753) |
| 7 | 51% 공격 - difficulty / nonce | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/84?category=1048753) |
| 8 | 지갑 키 생성 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/85?category=1048753) |
| 9 | 코인베이스 트랜잭션 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/86?category=1048753) |
| 10 | UTXO / 서명 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/87?category=1048753) |
| 11 | 트랜잭션 유효성 검사 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/88?category=1048753) |
| 12 | 지갑 잔액 / 트랜잭션 생성 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/89?category=1048753) |
| 13 | 미포함 트랜잭션 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/90?category=1048753) |
| 14 | mempool 업데이트 / 유효성 검사 | [![Read](https://img.shields.io/badge/Read-Article-000000?style=flat-square&logo=tistory&logoColor=white)](https://berrypjh.tistory.com/91?category=1048753) |
