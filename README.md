

# Notification
노티피케이션 토이 프로젝트 입니다.

A ~ Z 까지 전반적으로 서비스들을 Class화 하여 구조를 잡는데에 집중했습니다.
서비스 구현 부분을 중점적으로 봐주시면 감사하겠습니다.

# 설명
1. 사용자가 로그인
2. 사용자의 알림 인스턴스 발급
3. 데이터 서비스를 통한 table을 구독하여 해당 테이블에 데이터가 생성시 알림 발송.
4. 로그아웃시 알림 인스턴스 삭제.

# Test
 접속 http://172.30.1.18:3000 <br/>
 다음 테스트 계정으로 로그인 하여 확인 할 수 있습니다.  <br/>
 
 계정 1 <br/>
 ID:  test1@gmail.com <br/>
 password: 123

 계정 2 <br/>
  ID:  test2@gmail.com <br/>
 password: 123

## 개발 환경
1. Client: React + Vite
2. Server: NestJs
