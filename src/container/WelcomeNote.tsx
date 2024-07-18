import Card from '@/components/Card';

const WelcomeNote = () => {
  const greetingText = `謹啓

皆様におかれましては
ますますご清祥のこととお慶び申し上げます
  
このたび　私たちは結婚をすることになりました
つきましては　日頃お世話になっております皆様に
感謝を込めて　ささやかな小宴を催したく存じます
  
ご多用中　誠に恐縮ではございますが
ぜひご出席をいただきたく　ご案内申し上げます
  
謹白`;
  return (
    <Card color="primary" classes="py-10" useAnimation>
      <p className="text-white text-center whitespace-pre-wrap break-words text-shadow">
        {greetingText}
      </p>
    </Card>
  );
};

export default WelcomeNote;
