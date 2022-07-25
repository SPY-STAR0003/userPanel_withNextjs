import { Card, User, Text, Link } from "@nextui-org/react";

const ArticleCard = () => {
  return (
    <Card css={{ p: "$6", mw: "30%" , margin: " .8rem 1rem" }}>
      <Card.Header>
        <User
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name=" دوست خدا "
            description=" آتوسا میرباقری "
        />
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text className="fs-9 bold-5 ptb-0 textRight">
            پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت …
        </Text>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;