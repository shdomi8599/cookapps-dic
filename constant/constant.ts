export const IMPOTANCE: string[] = [
  "별없음 : 중요 X, 자주 X",
  "★ : 상대적 중요 O, 자주 X",
  "★★ : 중요 O, 자주 X",
  "★★★ : 중요 O, 자주 O",
];

type StarRating = "" | "★" | "★★" | "★★★";
export type Category = {
  [key: string]: CategoryData;
};
export type CategoryData = {
  [key: string]: Content;
};
export type Content = {
  star: StarRating;
  content: string;
};

export const COOKAPPS: Category[] = [
  {
    통계: {
      "디에이유 (DAU=Daily Active User)": {
        star: "★★★",
        content:
          "일간 활성 사용자로 하루 동 안 게임에 접속하는 사용자 수를 뜻함.",
      },
      "앤알유 (NRU=Newly Reg- istered User)": {
        star: "★★★",
        content: "신규 사용자를 뜻함.",
      },
      "피유 (PU=PayingUser)": {
        star: "★★",
        content: "구매 사용자를 뜻함.",
      },
      "리텐션 (Retention)": {
        star: "★★★",
        content: "특정 일에 앱을 설치한 유저의 일별 재방문율(%).",
      },
      "디원리텐션 (D-1 Reten- tion)": {
        star: "★★★",
        content: "애플리케이션 설치 다음날의 접속율(%).",
      },
      "바이럴 (Viral)": {
        star: "★★★",
        content: "유저의 자발적인 포스팅, 친구 초대 등으로 인한 전파 행위.",
      },
      "아이에이피 (IAP)": {
        star: "★★",
        content:
          "인앱 구매를 의미하며, 유저가 앱 서비스 내부에서 유료 결제를 통해 추가 콘텐츠를 구매하는 것을 의미함. 통상 IAP 수익+광고 수익이 앱의 매출을 구성한다.",
      },
      "사용자별 일 평균 매 출 (ARPDAU=Average Revenue Per Daily Active User) ":
        {
          star: "★★★",
          content:
            "하루 평균 매출을 DAU로 나눈 값으로, 접속 유저 1명당 하루 평균 결제 금액을 의미함.",
        },
      "유료 사용자별 평균 매출 (ARPPU=Average Reve- nue per Paying User)": {
        star: "★★",
        content:
          "기존 구매사용자를 대상으로 매출을 상승시키거나, 게임의 전반적인 가격대 밸런스를 볼 때 자주 사용되는 수치. 해당 수치가 상승하였을 때에는 게임 전체 아이템 평균 가격과 구매횟수를 측정하여 왜 해당 수치가 변했는지 알 수 있음.",
      },
      "엘티비 (LTV=Lifetime Value)": {
        star: "★★★",
        content:
          "고객 생애 가치라는 뜻으로, 1명의 유저가 게임을 시작해서 게임에서 완전히 이탈할 때까지 게임을 통해 기업에 지출하는 총 지불액을 뜻하며, IAP와 광고 수익 등, 모든 종류의 수익을 포함한다.",
      },
      "앱이벤트 (App Events)": {
        star: "★★★",
        content:
          "앱 또는 웹페이지에서 특정한 조건(설치, 구매, 클리어 등)이 만족되면 클라이언트가 해당 시점의 유저 정보를 서버로 전송하는 방식의 통계 누적 방식. Facebook Analytics, Apps Flyer, Google Firebase 등에서 활용된다.",
      },
      "에이비테스트 (A/B Test)": {
        star: "★★",
        content:
          "유저를 서로 겹치지 않게 두 그룹으로 나누고, 한 쪽은 현재 상태 그대로, 다른 한쪽은 테스트를 하고 싶은 변경 사 항을 적용하여 비교하는 테 스트 방법",
      },
      "씨비알 (CVR = Conver- sion Rate)": {
        star: "★★",
        content:
          "특정 행위로 유저가 전환되 는 비율을 뜻한다. 특정한 전환 액션을 지칭하지 않는 경우, 스토어 설치 전환율 (Store to Install Conver- sion Rate), 즉 앱스토어의 앱 정보 화면의 방문횟수 대 비 앱 설치로 연결되는 비율 을 의미한다.",
      },
    },
  },
  {
    마케팅: {
      "오가닉 유저 (Organic User)": {
        star: "★★★",
        content:
          "자연유입 유저를 의미함. 광고를 통해 유입되지 않은 유저를 뜻함. 유저는 스스로 게임을 검색해서 들어오거나, 차트(인기순위, 인기급상승 등), 바이럴, 추천 등 다양한 경로를 통해 게임에 유입될 수 있음.",
      },
      "논 오가닉 유저 (Non-Organic User)": {
        star: "★★",
        content:
          "유료 광고 또는 크로스 프로모션 등의 비용 지불을 통해 유입된 유저를 의미함. 오가닉 유저의 반대 의미",
      },
      "크로스 프로모션 (Cross Promotion)": {
        star: "★★★",
        content:
          "서비스 중인 게임들끼리 제휴해서 서로의 유저들에게 교차하여 각자의 게임을 광고하도록 하는 마케팅 방식을 뜻함. 신규 회원 유치를 위해 거의 비용을 들이지 않고 서로의 회원을 공유할 수 있는 것이 장점임.",
      },
      "로아스 (ROAS)": {
        star: "★★★",
        content:
          "광고의 효율성을 측정하기 위해 사용하는 지표로, 집행한 광고 비용 대비 수익률을 뜻함. 광고로 인해 발생된 매출액을 광고 집행에 지출한 총 비용으로 나누어 계산함. 광고로 인해 발생된 매출만이 아닌 모든 매출을 포함해서 계산하는 경우, eROAS(effective ROAS)라고 표기함.",
      },
      "에드 네트워크 (Ad Network)": {
        star: "★★★",
        content:
          "다양한 광고주(광고를 내고 싶은 회사)와 광고매체(광고를 실어주고 돈을 받는 회사)를 연결해 주는 광고 플랫폼 회사임. 광고주 입장에서는 광고를 다양한 매체의 지면에 알아서 제공해 주기 때문에 좋고, 광고매체 회사에게는 다양한 광고주의 광고를 실을 수 있도록 도와주기 때문에 광고 효율과 수익을 극대화 할 수 있게함.",
      },
      "미디에이션 (Mediation)": {
        star: "★★★",
        content:
          "광고매체사들이 더 높은 수익을 얻기 위해 다양한 애드네트워크들의 광고 효율을 비교, 분석하여 광고 효율이 높은 애드네트워크에게 광고를 더 많이 노출시킬 수 있도록 조정해주는 시스템. 애드몹(AdMob), 모펍(MoPub), 아이언소스(IronSource) 등이 있음.",
      },
      "씨피아이 (CPI=Cost per Install)": {
        star: "★★",
        content:
          "한 번의 인스톨을 이끌어내기 위해 광고주가 애드네트워크에 지불하는 인스톨 1건 당 단가를 말함.",
      },
      "씨피에이 (CPA=Cost per Action)": {
        star: "★★★",
        content:
          "인스톨이 아닌 광고주가 원하는 특정 액션(통상 IAP)을 유저가 취한 경우 광고주가 애드네트워크에 지불하는 단가를 말함.",
      },
      "이씨피엠(eCPM=Cost per Mille)": {
        star: "★★★",
        content:
          "유료광고 노출 1000회당 애드네트워크가 광고매체에 지불하는 비용을 의미함.",
      },
      "클릭율 (CTR=Click Through Ratio)": {
        star: "★★★",
        content:
          "광고 소재 하나가 노출될 때 클릭되는 비율을 뜻함. 보통은 ‘클릭율’이라고 하며 전체 노출 숫자를 광고 클릭 숫자로 나누어 계산함. 높은 CTR은 해당 광고가 타겟 그룹에 관련성이 높다는 긍정적인 신호가 될 수 있음.",
      },
      "아이알 (IR=Install Rate)": {
        star: "★",
        content:
          "설치율을 의미하며, 통상 마케팅 퍼포먼스를 계산할 때에는 IR=CTR*CVR로 측정한다. ex. 어떤 광고의 CTR=10%, CVR=50% 일 때, IR은 5%가 된다. IR이 높아질수록 CPI는 낮아지며, IR이 낮으면 CPI는 높아진다.",
      },
      "에이에스오 (ASO=App Store Optimization)": {
        star: "★★★",
        content:
          "앱이 스토어에서 검색이 잘 되게 하는 모든 것을 고민하고, 연구하는 일련의 과정. 키워드 분석, 디스크립션 작 성, 랭킹 체크, 스크린샷&아이콘 디자인 기획, 리뷰 체크 등의 작업을 하여 앱이 모바일 스토어 검색에서 높은 순위로 노출될 수 있도록 하고 스토어에 방문한 유저의 인스톨 전환율(Conversion rate)을 높이는데 목적이 있음",
      },
      "로컬라이제이션 (Localization)": {
        star: "★★",
        content:
          "현지화라는 뜻으로 자사 게임 등과 같은 제품을 특정 언어, 문화, 지역에 알맞도록 맞추는 과정을 말함",
      },
      "씨에스 (CS=Customer Service)": {
        star: "★★★",
        content:
          "고객 관리 서비스. 쿡앱스에서는 주로 게임 서비스에 대한 유저의 접수된 요청이나 불만사항을 처리하거나, 스토어 평점 관리 작업 등을 하는 것을 의미함",
      },
      "젠데스크 (Zendesk)": {
        star: "★",
        content:
          "CS 메시지 접수 채널로 사용되는 쿡앱스에서 주로 사용하는 유료 툴",
      },
      "캠페인 (Campaign)": {
        star: "★",
        content:
          "특정한 목적을 달성하기 위해 일관된 계획하에 일정 기간 전개하는 마케팅 활동을 포괄적으로 의미함",
      },
      "에드셋 (Adset)": {
        star: "★",
        content:
          "캠페인의 구성 요소로 타겟, 노출 위치, 예산을 설정할 수 있다. 광고 크리에이티브로 구성됨",
      },
      "크리에이티브 (Creative)": {
        star: "★★★",
        content:
          "이미지(배너), 영상, 플레이어 블(플레이 가능한 광고) 등의 종류가 있으며, 유저의 관심을 유도하여 캠페인의 목적을 달성하도록 구성해야 한다.",
      },
      "리인게이지먼트 캠페인 (Re-Engagement Campaign)": {
        star: "★★",
        content:
          "오랫동안 게임에 접속하지 않은 유저들을 다시 게임에 유입 시키기 위해 진행하는 광고",
      },
      "인플루언서 마케팅 (Influencer Marketing)": {
        star: "★★★",
        content:
          "소셜 플랫폼에서 다른 사용자들에 비해 유난히 더 영향력 있는 소셜 콘텐츠 크리에이터를 인플루언서라고 함. 인플루언서 마케팅이란 이들이 공유하는 특정 제품에 대한 의견이나 영상을 마케팅에 활용하는 것을 의미함.",
      },
    },
  },
  {
    기획: {
      "라인매칭 (Line-matching)": {
        star: "★★★",
        content:
          "블록을 드래그 방식으로 연결해서 같은 블록을 2개 이상 매칭, 제거시키는 장르의 게임",
      },
      "레벨 (Level)": {
        star: "★★★",
        content: "게임을 플레이하는 가상의 장소를 뜻함",
      },
      "레벨 업데이트 (스테이지 업데이트)": {
        star: "★★★",
        content: "게임 내 새로운 10개 또는 15개의 신규 레벨을 더해주는 행위",
      },
      "레벨볼 (Level Ball)": {
        star: "★★★",
        content: "로비 상에서 게임을 진입하기 위해 클릭해야 하는 버튼",
      },
      "로비 (Lobby)": {
        star: "★★★",
        content:
          "레벨볼, 월드맵, 팝업 UI 등이 배치되어 있는 인게임에 진입하기 전의 화면을 뜻함",
      },
      "매치쓰리 (Match-3)": {
        star: "★★★",
        content:
          "게임 블록을 한 번 스왑해서 같은 블록을 3개 이상 매칭시키는 장르의 게임",
      },
      "버블슈팅 (Bubble Shooting)": {
        star: "★★★",
        content:
          "경로를 좌우로 조절해 같은 색상의 블록을 2개 이상 붙여 제거시키는 장르의 게임",
      },
      "빌드 업데이트 (Buid Update)": {
        star: "★★★",
        content:
          "개발이 완료된 소프트웨어 인 빌드를 구글(안드로이드) 혹은 애플(Ios) 스토어에 올 려 게임을 사용자들에게 배 포하는 행위",
      },
      "솔리테어 (Solitaire)": {
        star: "★★★",
        content:
          "트럼프 카드의 다음 숫자의 카드를 하나씩 제거시켜 판 에 놓인 모든 카드를 없애는 것이 목적인 게임",
      },
      "스테이지 (Stage)": {
        star: "★★★",
        content:
          "레벨(Level)들의 묶음을 뜻 하며, 쿡앱스에서는 통상 한 스테이지에 10~15개 레 벨로 구성이 되고 해당 스 테이지의 모든 레벨 클리어 후 다음 스테이지 이동 시 키 (Key)로 오픈 후 이동 가능 하게 되어 있음",
      },
      "앱 이벤트 (App Event)": {
        star: "★★★",
        content:
          "앱 이벤트는 게임(앱)에서 유 저의 행위를 의미하며, 보통 페이스북 앱 이벤트를 사용 해 유저의 행위를 자세히, 데 이터 관점에서 분석할 수 있음.",
      },
      "인게임 (In-Game)": {
        star: "★★★",
        content:
          "월드맵 등에서 레벨볼 또는 특정 아이콘을 클릭해 진입한 게임 영역으로 실제 유저가 게임을 즐길 수 있는 화면을 뜻함.",
      },
      "인바이트 (Invite)": {
        star: "★★★",
        content:
          "게임 내 유저가 자신의 친구들 중 게임을 하지 않는 친구들에게 우리 게임으로의 초대를 하는 행위",
      },
      "콜랩스 (Collapse)": {
        star: "★★★",
        content:
          "2개 이상 인접해 있는 같은 블록을 클릭해서 제거시키는 장르의 게임",
      },
      "푸쉬알림 (Push-Notification)": {
        star: "★★",
        content:
          "스마트폰 상에서 유저의 접속을 유도하기 위해 지원하는 기능. 크게 데이터 통신 필요 유무에 따라 로컬 푸시와 서버 푸시로 구분된다.",
      },
      "스토어 평점 (Store Ratings)": {
        star: "★★",
        content:
          "모바일 스토어에서 사용자들이 게임을 플레이하고 평가 점수를 기록하고 리뷰를 남기게 되는데",
      },
      "모델링 (Modeling)": {
        star: "★★★",
        content:
          "원화를 바탕으로 3D 툴을 이용하여 오브젝트를 제작하는 과정. 원화는 그림, 모델링은 조각이라고 생각하면 쉬움.",
      },
      "벡터 이미지 (Vector Image)": {
        star: "★★★",
        content:
          "점과 선으로 렌더링 되는 이미지로써 스케일을 조정하더라도 퀄리티에 영향을 주지 않음. CPU 연산은 고비용이지만 메모리 점유율은 낮음.",
      },
      "비트맵 이미지 (Bitmap Image)": {
        star: "★★★",
        content:
          "픽셀 단위로 렌더링 되어지며, 스케일을 확대할 경우 이미지 퀄리티가 떨어짐. 렌더링 속도가 벡터에 비해 빠르고 CPU 연산에 부담이 적지만 메모리 점유율은 벡터에 비해 높음.",
      },
      "스파인 (Spine)": {
        star: "★★★",
        content:
          "2D 애니메이션 툴로 LIVE 2d와 함께 bone 애니메이션 작업에 가장 특화되어 있으며 자연스러운 메쉬 움직임으로 마치 3D처럼 보이게 함.",
      },
      "유니티 3D (Unity 3D)": {
        star: "★★★",
        content:
          "쿡앱스 내에서 주로 모바일 게임 제작에 사용되는 엔진 을 말함. 현재 WebGL등 대 응을 위한 많은 변화가 이루 어지고 있는 툴이고 모바일 개발, 연출 시 필수적으로 사 용하고 있는 툴",
      },
      "유니티 2D 시스템 (Unity 2D System)": {
        star: "★★★",
        content: "유니티 3D 엔진 내부에 있는 2D 구현 시스템을 말함",
      },
      "유니티 파티클 시스템 (Unity Particle System)": {
        star: "★★★",
        content:
          "유니티 3D 엔진 내부에 있는 파티클 이펙트 구현 시스 템을 말함. 슈리켄이라는 유 니티 플러그-인을 인수한 뒤 유니티 내부엔진에 이식하여 서 구현한 툴 임",
      },
      "이펙트 (Effect)": {
        star: "★★★",
        content: "게임 내부에서 발생하는 모 든 특수효과를 말함",
      },
      "ASO 이미지 (ASO Image)": {
        star: "★★★",
        content:
          "앱 가시성 향상을 위한 스토 어 최적화 이미지를 일컫는 말로 앱아이콘, 스토어 스크 린 샷 등이 있다.",
      },
      "최적화 (Optimization)": {
        star: "★★★",
        content:
          "유니티 내의 그래픽 리소스 를 최적의 상태로 개선하기 위한 작업. 예로는 로더 용량 최소화, 리소스 최적화 등이 있다.",
      },
      "픽셀 (Pixel)": {
        star: "★★★",
        content: "이미지의 크기를 말하는 단 위",
      },
      "크리에이티브 이미지 (Creative Image)": {
        star: "★★★",
        content: "마케팅을 목적으로 만들어진 이미지와 영상물을 말함",
      },
      "해상도 (Resolution)": {
        star: "★★★",
        content:
          "화면의 세밀함(픽셀수)를 뜻 하며 각 기기마다 해상도 가 다르다. 단위는 dpi(dot per inch)를 사용하며 모바 일 및 웹은 72dpi, 출력물은 200~300 dpi를 사용한다.",
      },
      "유아이 (UI=User Interface)": {
        star: "★★★",
        content:
          "게임을 즐기기 위해 사용자가 조작하고 정보를 얻는 모든 그래픽 요소를 뜻함.",
      },
      "유엑스 (UX=User Experience)": {
        star: "★★★",
        content:
          "게임을 즐기기 위해 접하는 사용자의 느낌, 태도, 행동 등의 ‘경험’을 뜻함.",
      },
      "UGUI (Unity GUI)": {
        star: "★★",
        content:
          "유니티에서 UI를 제작하기 위해 사용되는 GUI 툴이며 UGUI를 이용해 대부분의 UI 아트어셋을 제작한다.",
      },
      "NAS 폴더(구 100번 폴더)": {
        star: "★★",
        content:
          "대부분의 편집 가능한 디자인 리소스가 백업되어 있는 쿡앱스 내부의 공유폴더.",
      },
      "3D 맥스 (3DS MAX)": {
        star: "★★",
        content:
          "오토데스크사에서 개발한 3D 이미지, 애니메이션, 이펙트 등 3D 전반적인 모든 리소스 제작 작업이 가능하게 만들어주는 툴을 말함.",
      },
      "나인 슬라이스 (9 Slice)": {
        star: "★★",
        content:
          "UI의 그래픽 리소스를 최적화하기 위해 일반적으로 사용하는 기법.",
      },
      "더미 이미지 (Dummy Image)": {
        star: "★★",
        content:
          "제작 전, 또는 제작 중에 완 성상태를 예측하기 위하여, 레퍼런스 이미지 또는 작업 그래픽. (원화·UI/UX 애니메이션/이펙트) 중인 스케치, 페인팅 등을 실 제 구현환경과 유사하게 꾸 며보는 것. “더미를 얹어본 다”란 말이 있음",
      },
    },
  },
  {
    그래픽: {
      "레이아웃 (Layout)": {
        star: "★★★",
        content:
          "컴퓨터 그래픽 디자인이나 소프트웨어 디자인에서 각 구성요소를 제한된 공간 안에 효과적으로 배열하고 디자인하는 일",
      },
      "스크린샷 (Screen Shot)": {
        star: "★★★",
        content: "ASO에서 사용되는 게임의 스크린샷.",
      },
      "아이콘 (Icon)": {
        star: "★★★",
        content:
          "게임 내 기능이나 의미를 가진 그래픽 요소를 작고 직관적으로 그래픽으로 표현한 것",
      },
      "애니메이트 CC (Animate CC)": {
        star: "★★★",
        content:
          "어도비(Adobe)사에서 개발한 벡터 애니메이션 제작 및 편집과 액션스크립트 3.0을 이용한 스크립트 작업이 가능한 툴을 말함. 웹 버전용 리소스 제작에 필수적인 툴",
      },
      "애프터 이펙트 (After Effect)": {
        star: "★★★",
        content:
          "어도비사에서 개발한 이펙트 제작 툴을 말한다. 현재 회사 내부의 웹 게임 제작에 있어서 필수적으로 사용되고 있는 툴을 말한다.",
      },
      "폰트 (Font)": {
        star: "★★",
        content:
          "일정한 디자인 양식을 갖춘 문자의 형. 비트맵 폰트와 벡터 폰트로 분류할 수 있다.",
      },
      "플러그인 (Plug in)": {
        star: "★★",
        content:
          "프로그램에서 제공하는 기본 기능 외에 무료, 유료의 편리한 기능을 추가로 제공해주는 기능",
      },
      "비네팅 처리 (Vignetting Processing)": {
        star: "★★",
        content: "이미지의 가장자리를 어둡게 하는 것",
      },
      "블러 효과 (Blur Effect)": {
        star: "★★",
        content:
          "이미지를 뿌옇게 하는 것. 블러 적용의 정도가 강할수록 더 뿌옇게 됨",
      },
      "아우터 글로우 (Outer Glow)": {
        star: "★★",
        content: "개체의 바깥으로 퍼지는 효과를 넣는 것(↔ 이너 글로우)",
      },
      "닷지 처리 (Dodge Processing)": {
        star: "★★",
        content:
          "이미지의 노출을 높이는 것. 빛을 받은 것 같은 느낌을 연출할 수 있음",
      },
      "로더 이미지 (Loader Image)": {
        star: "★★",
        content:
          "페이스북 캔버스에서 유저가 앱을 클릭한 후, 가장 처음 보는 이미지. 앱의 로딩 속도를 표시하기도 함",
      },
      "타이포그래피 (Typofra- phy)": {
        star: "★★",
        content: "디자인에 있어서 폰트의 서체나 글자 배치 등의 구성 및 표현.",
      },
      "페이스북 팬페이지 이미지 (Facebook Fan Page Image)": {
        star: "★★",
        content:
          "페이스북에서 서비스 되는 게임들은 게임과 직접적으로 연동할수 있는 App Page 가 존재하는데 내부에서는 해당 페이지를 팬 페이지라고 함. 그페이지에 게시되는 이미지 형식의 게시물을 팬 페이지 이미지라고 부름",
      },
    },
  },
  {
    "사운드 및 영상": {
      "비지엠 BGM (Back Ground Music)": {
        star: "★★★",
        content:
          "게임의 로비나 인게임에서 사용되는 배경음악을 말한다. 약 1~2분 가량의 길이로 제작됨",
      },
      "징글 (Jingle)": {
        star: "★★★",
        content:
          "멜로디성 효과음을 지칭함. 주로 게임 클리어, 패배, 스타트 시 사용되며, 약 3~5초 의 길이로 제작되어짐",
      },
      "효과음 SFX (Sound Effect)": {
        star: "★★",
        content: "게임내 연출, UI버튼 등 각종 효과에 사용되는 짧은 음원을 말함",
      },
      "노멀라이즈 (Normalize)": {
        star: "★★",
        content:
          "음량을 일정하게 만드는 것. 유니티에서 모노로 출력할시 기본으로 체크되는 효과. 해당 옵션을 체크해제 하는 것을 추천함",
      },
      "루프 (Loop) 음악": {
        star: "★★",
        content:
          "루프 음악은 처음과 끝 지점을 반복하여 재생하는 것을 말합니다. 주로 BGM을 루프 시킴으로써 반복적인 음악을 구현합니다.",
      },
      "스테레오 (Stereo)": {
        star: "★",
        content:
          "스테레오는 동시에 좌, 우 2 채널을 출력하는 것을 의미합니다. 좌우 각 다른 소리를 내어서 공간감을 높여줍니다.",
      },
      "9-Slice 기법": {
        star: "★★",
        content:
          "9-Slice 기법은 이미지를 9조각으로 자른 뒤 각각의 모서리를 살리는 기법을 말합니다. 이를 통해 이미지의 크기를 조정할 때, 이미지의 깨짐 현상을 방지할 수 있습니다.",
      },
      "중복출력 (Overlap Output)": {
        star: "★",
        content:
          "중복출력은 개발 시 주의해야할 개념입니다. 주로 블록이나 오브젝트들이 동시에 발동하거나 제거될 때, 해당 효과음이 중첩되어 출력되는 현상입니다. 같은 파일이 한꺼번에 출력되므로 소리가 상당히 증폭되어 게임에 방해가 될 수 있습니다. 중복출력이 되지 않도록 개발 단계에서 잘 처리하고 테스트에서도 모니터링이 필요합니다.",
      },
      "스토어 영상 (Store Preview)": {
        star: "★★★",
        content:
          "스토어 영상은 해당 게임의 구글 플레이 스토어/애플 앱 스토어 페이지의 미리 보기 형식의 영상입니다. 이를 통해 게임의 미리보기를 제공하여 유저들이 게임을 더 잘 이해할 수 있도록 합니다.",
      },
      "UA 영상 (User Acquisition)": {
        star: "★★★",
        content:
          "유저 모객 마케팅에 사용되는 필수 광고 요소로서 주로 페이스북/인스타그램 플랫폼으로 게재되는 영상 광고",
      },
    },
  },
  {
    개발: {
      "게임오브젝트 (Game Object)": {
        star: "★★★",
        content:
          "게임을 표현하기 위한 각각의 개체를 뜻함. 사람, 자동차, 적, 공, 집, 빛 등 콘텐츠 안에서 실제적으로 보여지는 각각의 물건, 물체를 말함.",
      },
      "데이터베이스 (Database)": {
        star: "★★★",
        content:
          "DB라고 불리며 서로 관련성을 가지며 중복이 없는 데이터의 집합. 쿡앱스에서 사용하는 데이터베이스 관리 시스템은 MySQL이다.",
      },
      "디버그 (Debug)": {
        star: "★★★",
        content: "버그를 제거/수정하는 행위",
      },
      "로그인 (Login)": {
        star: "★★★",
        content:
          "사용자가 호스트 컴퓨터나 네트워크에 자신의 계정 정보를 등록하여 사용 권한을 받아 접속하는 작업",
      },
      "버전관리 (Version Manage)": {
        star: "★★★",
        content:
          "게임 프로젝트를 개발 및 유지보수 하기 위해서 작업별로 버전을 관리하는 일. 주로 사용되는 툴은 SVN, Git(요즘엔 주로 Git을 많이 사용)",
      },
      "아마존 웹 서비스 (Amazon Web Service)": {
        star: "★★★",
        content: "amazon.com이 제공하는 원격 컴퓨팅 서비스",
      },
      "아틀라스 (Atlas)와 아틀라스 최적화 (Atlas Optimization)": {
        star: "★★★",
        content:
          "아틀라스는 게임 이미지를 효율적으로 사용하기 위해 한 시트에 여러 이미지를 담아 놓은 리소스를 말함. 게임에서 이미지는 성능에 많은 영향을 주는데, 아틀라스 최적화란 게임에서 중복적으로 사용되는 이미지를 합쳐서 빈 공간 없이 한 시트에 잘 채우는 행위를 뜻함.",
      },
      "업데이트 (Update)": {
        star: "★★★",
        content: "콘텐츠, 리소스, 레벨 등을 갱신하는 것",
      },
      "에이피아이 (API=Application Programming Interface)": {
        star: "★★★",
        content:
          "소프트웨어를 구축하고 통합하기 위한 정의 및 프로토콜 세트로, 클라이언트와 서버가 서로 데이터를 주고 받기 위해 규약하는 프로그래밍 인터페이스를 뜻함",
      },
      "FTP (File Transfer Protocol)": {
        star: "★★★",
        content:
          "파일전송프로토콜. 인터넷 상의 컴퓨터들간에 파일을 교환하기 위한 표준 인터넷 규약. 인터넷에서 사용되는 리소스들을 업로드 하기 위한 공간. 게임에서 사용되어지는 리소스들을 FTP에 업로드 하여 실제 게임에서 로드하여 사용함",
      },
      "유니티3D 엔진 (Unity3D Engine)": {
        star: "★★★",
        content:
          "쿡앱스에서 제작되는 대부분의 게임을 개발하는 게임 개발 엔진. 3D엔진이지만 2D 게임도 제작이 가능하다. 게임 제작은 무대 연출과 비슷한데, 씬은 무대, 게임오브젝트는 연기자와 소품들이라고 생각하면 이해가 쉽다. 씬에 배치된 게임오브젝트를 카메라로 찍은 화면이, 유저가 보는 게임 화면이 된다.",
      },
      "유아이디 (UID=User Identification)": {
        star: "★★★",
        content:
          "유저의 계정 정보를 파악할 수 있는 고유한 숫자 조합. Facebook 플랫폼의 경우 Facebook 사용자 ID에 해당함. 기본적인 Facebook ID와 앱마다 부여되는 ID가 다를 수 있음.",
      },
      "최적화 (Optimization)": {
        star: "★★★",
        content:
          "메모리, 용량, 프레임레이트 등을 최적의 상태로 개선하기 위한 작업. 예로는 로더 용량 최소화, 리소스 분할로딩, 객체 재사용 등이 있음.",
      },
      "캐쉬 (Cache)": {
        star: "★★★",
        content:
          "이전에 사용된 데이터를 임시로 저장하고 있다가 필요 시 저장되어 있던 리소스를 바로 사용할 수 있게 해주는 기술. 사용자는 리소스를 재로드 할 필요가 없으므로 빠르게 게임을 실행할 수 있음. (클라이언트·서버)",
      },
      "커밋 (Commit)": {
        star: "★★★",
        content:
          "본인이 작업한 내용을 SVN 또는 Git(commit 이후 push까지 해야하는점이 다릅니다)과 같은 버전관리 도구를 이용해 서버에 올리는 작업",
      },
      "컨플릭트 (Conflict)": {
        star: "★★★",
        content:
          "Commit이나 업데이트 과정에서 본인이 수정한 작업과 타인이 수정한 작업이 겹쳐서 충돌나는 상태",
      },
      "프리팹 (Prefab)": {
        star: "★★★",
        content:
          "프리팹은 유니티에서 프로젝트를 관리하는데 있어 가장 중요하고 편리한 기능으로, 오브젝트의 생성과 관리를 수월하게 만드는 일종의 설계도면을 뜻합니다. 붕어빵을 찍어내는 틀과 비슷한 역할을 한다고 생각하면 이해할 수 있습니다.",
      },
      "프로토콜 (Protocol)": {
        star: "★★",
        content:
          "통신 시스템이 데이터를 교환하기 위해 사용하는 통신 규칙과 약속",
      },
      "푸시 (Push)": {
        star: "★★",
        content:
          "Git에서 본인이 작업한 내용을 Commit 후 다른 작업자에게 공유될 수 있도록 서버로 올리는 작업",
      },
      "쉐이더 (Shader)": {
        star: "★★★",
        content:
          "그래픽 처리 장치(GPU)의 프로그래밍이 가능한 렌더링 파이프라인을 조작할 수 있는 프로그래밍 언어로 화면에 출력할 픽셀의 위치와 색상을 계산한다.",
      },
      "리펙터링 (Refactoring)": {
        star: "★★",
        content:
          "'결과의 변경없이 코드의 구조를 재조정함’을 뜻한다. 주로 코드의 가독성을 높이고 유지보수를 편하게 하거나, 퍼포먼스 개선을 위해 진행한다. 버그를 없애거나 새로운 기능을 추가하는 행위는 아니다.",
      },
      "GPU (Graphics Processing Unit)": {
        star: "★★★",
        content:
          "그래픽 연산을 빠르게 처리하여 결과값을 모니터에 출력하는 연산 장치",
      },
      "드로우콜 (Draw Call)": {
        star: "★",
        content:
          "CPU가 GPU에게 화면에 오브젝트를 그려달라고 하는 요청. 낮으면 낮을수록 좋다.",
      },
      "카메라 (Camera)": {
        star: "★",
        content:
          "씬에 구성된 게임 오브젝트들을 유저가 볼 수 있도록 표시하는 도구.",
      },
      "케이에스티 (KST=Korea Standard Time)": {
        star: "★",
        content: "대한민국 표준 시간",
      },
      "씬 (Scene)": {
        star: "★",
        content:
          "Unity에서 게임 제작을 위해 제공되는 가상 공간으로, 여러 게임 오브젝트들이 구 성되어 게임의 형태가 표현 되는 공간이다.",
      },
      "유티씨 (UTC=Coordinated Universal Time)": {
        star: "★",
        content:
          "쿡앱스 내 서버에서 사용하는 시간으로 국제 표준시간( 대한민국 시간 -9시간)을 의미함",
      },
      "피에스티 (PST=Pacific Standard Time)": {
        star: "★",
        content:
          "페이스북에서 사용하는 시간으로 태평양 표준 시간(대 한민국 시간 -16시간)을 의미함",
      },
    },
  },
  {
    경영지원: {
      "게임잼 (Game Jam)": {
        star: "★★★",
        content:
          "게임잼이란 쿡앱스의 구성 원들이 3일이라는 짧은 시간 동안 자발적으로 게임을 제작하고 스토어에 직접 출시까지 하는 게임 제작 행사임. 구성원들은 장르, 스타일, 출시 국가 등 거의 모든 부분에 있어 아무런 제한 없이 창의성을 최대한 발휘해 볼 수 있음.",
      },
      "미션 (Mission)": {
        star: "★★★",
        content:
          "미션은 기업의 근본적인 존재 이유로, 쿡앱스가 왜 존재해야 하며, 우리 회사가 궁극적으로 달성하고자 하는 목적이 무엇인지를 설명해 줌. 쿡앱스의 미션은 '세상을 즐겁게(Make the world fun)'임.",
      },
      "비전 (Vision)": {
        star: "★★★",
        content:
          "비전은 미션을 달성하는 과정에 있는 중간 목표로, 향후 쿡앱스가 이루고자 하는 미래 모습을 뜻함. 쿡앱스는 '2030년까지 즐거운 게임을 만드는 팀 40개를 만든다.'",
      },
      "씨오피 (CoP = Community of Practices)": {
        star: "★★★",
        content:
          "공통의 직무나 관심사, 특정 문제의 해결에 관심 있는 구성원들이 자발적으로 학습 조직을 만들어 연구하는 활동",
      },
      "핵심 가치 (Core Value)": {
        star: "★★★",
        content:
          "쿡앱스의 모든 구성원이 공유하고 실천해야 하는 중요한 가치임. 핵심 가치는 다양한 배경과 가치관을 가진 구성원을 하나로 모으는 구심점 역할을 하며, 쿡앱스의 주요 의사결정과 행동의 기준점이 됨.",
      },
      "OKR (Object+Key Result)": {
        star: "★★★",
        content:
          "OKR은 회사, 팀, 구성원이 목표를 설정하고, 달성 과정 및 결과를 주기적으로 확인하는 소통방식으로 가장 중요한 것이 무엇인지 알려주고 모두가 한 방향에 집중할 수 있도록 도움을 줌. 경영지원. (인사)",
      },
      "알오아이 (ROI=Return On Investment)": {
        star: "★★★",
        content:
          "투자대비 수익률을 의미하며, 수익을 투입비용으로 나누어 계산함. 1을 기준으로 그 이상일 경우 순이익, 그 이하일 경우 마이너스 수익을 뜻함.",
      },
      "비이피 (BEP=Break Even Point)": {
        star: "★★★",
        content: "손익분기점을 뜻하며, 수익 - 비용 = 0 이 되는 시점을 말함.",
      },
      "연말정산 (Year-end Tax Adjustment)": {
        star: "",
        content:
          "국세청에서 1년 동안 간이세 액표에 따라 거둬드인 근로 소득세를 연말에 다시 계산하여 실제 소득보다 많은 세금을 냈으면 돌려주고 적게 거뒀으면 더 징수하는 절차",
      },
      "근로소득 원천징수 영수증 (Earned income withholding receipt)": {
        star: "",
        content:
          "근로기간 동안 근로소득에 대한 원천징수 내역이 기재되어 있는 영수증으로 같은 해 이직한 경우 12월말 소속된 회사에 전근무지 근로소득 원천징수 영수증을 제출(또는 근무지가 2곳 이상인 경우 주 근무지에 영수증을 제출)하여 소득을 합산하고 세금을 정산하여야 함.",
      },
      "재무제표 (Financial Statement)": {
        star: "",
        content:
          "다수 이용자에게 경제적 의사결정에 유용한 재무상태, 성과 그리고 재무상태에 관한 정보를 제공 (*종류: 재무상태표, 손익계산서, 현금흐름표, 자본변동표, 주석 등)",
      },
      "재무상태표 (Statement of Financial position)": {
        star: "",
        content:
          "일정한 시점의 재무상태를 나타내는 보고서로 기업이 그 시점까지 자금을 어디서 얼마나 조달하여 어떻게 투자하였는가를 보여주는 표",
      },
      "손익계산서 (Income Statement)": {
        star: "",
        content:
          "일정기간동안 기업의 경영성 과에 대한 정보를 제공하는 보고서로 수익과 비용을 대 응시켜 손익을 표시 (*구조 : 매출액-매출원가= 매출총이익-판매비와 관리 비=영업이익+영업외수익- 영업외비용=법인세차감전 순이익-법인세비용=당기순 이익) 경영지원. (회계)",
      },
    },
  },
  {
    기타: {
      "큐에이 (Quality Assurance)": {
        star: "★★★",
        content:
          "게임이 일정 수준의 품질 (Quality)을 가질 수 있도록 제품 출시 이전에 테스트 및 검수를 진행하는 업무를 뜻 함",
      },
      "티큐에이 (Technical QA)": {
        star: "★★★",
        content:
          "요구사항(기획)에 맞게 구현 되었는지 기술적 내용을 검증하는 역할을 뜻함. a.기술적인 결함을 판별 b.요구사항(기획)의 구현 가능 여부를 제품 구현 전에도 정적 테스트로 검증할 수 있다.",
      },
      "에프큐에이 (Fun QA)": {
        star: "★★★",
        content:
          "요구사항 분석 단계 또는 인수 테스트 단계에서 재미를 검증하는 활동을 통해 재미 요소를 보증하는 역할을 뜻 함",
      },
      "티씨 (Test Case)": {
        star: "★★★",
        content:
          "각 종 상황과 시나리오를 테스팅하기 위해 만들어 놓는 문서(또는 집합)를 뜻함. 각 기능별 상황(Steps)과 예상 결과, 사전 조건, 처리 결과 등의 항목으로 구성되어 있 다.",
      },
      "버그 (Bug)": {
        star: "★★",
        content:
          "의도되지 않게 작성된 코드나 알고리즘으로 인해 발생되는 각 종 결함을 뜻함. a.소프트웨어적 결함이라고 이해하면 쉽게 이해할 수 있음 b.단, 예외적인 경우도 있기 때문에 개발자만의 문제로 잡지 않아야 함",
      },
      "에프지티 (Focus Group Test)": {
        star: "★★",
        content:
          "게임의 높은 완성도를 위해 특정 소규모 테스트 그룹을 대상으로 게임 콘텐츠 등에 대해 집중적으로 진행하는 테스트 (QA용어)",
      },
    },
  },
];

export const CATEGORIES = COOKAPPS.map((data) => Object.keys(data)[0]);
