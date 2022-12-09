import Head from 'next/head';
import {
  Jumbotron,
  Button,
  Container,
  Image,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import '../components/icons';

export default function Home() {
  return (
    <>
      <Head></Head>

      <main>
        <Image src="/coffee-brewing.jpeg" width={1500} fluid />
        <Jumbotron className="col-8 mt-5 mx-auto">
          <h1>Go Travel !</h1>
          <p>행복하고 즐겁게 여행을 떠나요 ~ </p>
          <p>
            <Button variant="primary">더 알아보기</Button>
          </p>
        </Jumbotron>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3">
            <Col className="mb-4">
              <Card className="py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>강원도 강릉시</Card.Title>
                  은은한 커피향이 남다른 강원도 강릉시.
                  <br />
                  <br />
                  <p>
                    카페거리로 유명한 안목해변은 발이 닿는 어디든 향긋한 커피 한
                    잔에 지평선 끝까지 펼쳐지는 바다 풍경은 덤으로 얻을 수 있다.
                    일출 명소로 유명한 정동진과 야경이 아름다운 경포대는 대표
                    여행 코스! 구름도 머물다 간다는 해발 1,100m에 위치한 강릉
                    안반데기 마을은 전망대에 올라 드넓게 펼쳐진 배추밭이 붉게
                    물드는 일출 전경이 일품이다.
                  </p>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post1"
                >
                  {' '}
                  강릉으로
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>부산광역시</Card.Title>
                  우리나라 제2의 수도 부산광역시. <br />
                  <br />
                  <p>
                    부산 대표 관광지로 손꼽히는 해운대는 밤에는 마린시티의
                    야경이 더해져 더욱 화려한 해변이 된다. 감천문화마을은 사진
                    찍기에 좋으며, 매해 가을마다 개최되는 아시아 최대 규모의
                    영화제인 부산국제영화제와 함께 부산의 구석구석을 즐겨보는
                    것도 좋다. 전통시장 투어가 있을 만큼 먹거리가 가득한 부산의
                    맛기행은 필수!
                  </p>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post2"
                >
                  부산으로
                </Button>
              </Card>
            </Col>
            <Col className="mb-4 offset-md-3 offset-xl-0">
              <Card className="pricingCard py-5 shadow-lg h-100 ">
                <Card.Body>
                  <Card.Title>제주특별자치도</Card.Title>
                  섬 전체가 하나의 거대한 관광자원인 제주도. <br />
                  <br />
                  <p>
                    에메랄드빛 물빛이 인상적인 협재 해수욕장은 제주 대표
                    여행지며, 파도가 넘보는 주상절리와 바다 위 산책로인 용머리
                    해안은 제주에서만 볼 수 있는 천혜의 자연경관으로 손꼽힌다.
                    드라마 촬영지로 알려진 섭지코스는 꾸준한 사랑을 받고 있으며
                    한라봉과 흑돼지, 은갈치 등은 제주를 대표하는 음식이다.
                  </p>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post3"
                >
                  {' '}
                  제주도로
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="parallax paralsec" />
        <Container>
          <div className="mt-3 p-3 mx-auto">
            <h2>Cafe au Lait</h2>
            <p>
              Foam iced single origin, instant crema sit in acerbic robusta.
              Saucer, frappuccino café au lait fair trade mocha café au lait
              skinny. Black, est cup aftertaste cream roast a as strong barista.
              White so, acerbic redeye, doppio chicory affogato, shop cortado
              coffee wings viennese. French press cappuccino single origin
              dripper qui frappuccino decaffeinated.
            </p>

            <p>
              Strong sweet filter cup grounds, americano robust caffeine to go
              lungo body. Froth ristretto that dark acerbic plunger pot a medium
              half and half. Instant cinnamon grinder et decaffeinated ut
              carajillo frappuccino. Whipped organic chicory café au lait
              cappuccino cortado whipped. Aftertaste, organic, a, extraction
              aftertaste, doppio, sugar variety cortado at froth aged.
            </p>

            <p>
              Grounds lungo, bar cup so a foam. Fair trade con panna id variety
              mocha trifecta brewed kopi-luwak pumpkin spice brewed beans. Aged,
              aroma, chicory, decaffeinated breve, percolator organic and extra
              body. Fair trade half and half macchiato cultivar et sit in
              cappuccino. Dark beans, caffeine variety grinder rich redeye
              acerbic.
            </p>
          </div>
        </Container>
      </main>
      <footer className="footer mt-auto mx-auto py-3 bg-light">
        <div className="container text-center">
          <span className="text-muted text-center">
            Copyright &copy; 2022 Travel by Leegunwoo
          </span>
        </div>
      </footer>
    </>
  );
}
