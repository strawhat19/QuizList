import './question.scss';

import { Button, Grid } from '@mui/material';
import { letters } from '@/app/shared/library/common/constants';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';

export type QuestionCardOptions = {
  title?: string;
  bgColor?: string;
  fontColor?: string;
  question: Question;
  buttonJustify?: string;
}

export class Question {
  [key: string]: any;
  constructor(quesObj: {
    subject: string;
    topics: string[],
    question: string,
    difficulty: string,
    explanation: string,
    answer: string | number | any,
    choices: string[] | number[] | any[],
  }) {
    Object.assign(this, quesObj);
  }
}

export default function QuestionCard({
  question,
  title = `Q1.`,
  buttonJustify = `flex-start`,
  bgColor = `var(--${question.difficulty})`,
  fontColor = `var(--fontColor) !important`,
}: QuestionCardOptions) {

  let buttonStyle = { 
    color: fontColor, 
    background: bgColor, 
    justifyContent: buttonJustify,
  };

  const validateChoice = (choice: any) => {
    console.log(choice == question.answer ? `Correct` : `Wrong`, `You clicked`, choice, `Answer was`, question.answer);
  }

  return (
      <DCard 
        title={title} 
        cardTitleBG={bgColor}
        cardTitleLabelPadding={0}
        cardTitleColor={fontColor}
        stackJustify={buttonJustify} 
        className={`questionCard p0`}
        cardTitlePadding={`12px var(--space)`}
        cardTitleBorderColor={`transparent !important`}
        action={(
          <div className={`questionAndTopics flex spaceBetween`}>
            <strong>{question.question}</strong>
            <div className={`topics simpleFlex alignCenter gap5`}>
              {question.topics.map((topic: any, tidx: any) => (
                <strong key={tidx}>
                  <i>{topic}{tidx == question.topics.length - 1 ? `` : `, `}</i>
                </strong>
              ))}
            </div>
          </div>
        )}>
        <div className={`choicesContainer simpleFlex px5 column gapSpace`}>
          <Grid className={`choices sideSpace bottomSpace`} container spacing={3}>
            {question.choices.map((choice: any, cidx: any) => {
              return (
                <Grid key={cidx} item xs={6}>
                  <Button 
                    style={buttonStyle}
                    defaultValue={choice} 
                    onClick={() => validateChoice(choice)} 
                    className={`questionButton choice w100 mainButton`} 
                  >
                    <strong>{`${letters[cidx]})`} {choice}</strong>
                  </Button>
                </Grid>
              )
            })}
          </Grid>
        </div>
    </DCard>
  )
}