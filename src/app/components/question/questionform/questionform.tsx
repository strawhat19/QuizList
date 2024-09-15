'use client';

import './questionform.scss';

import { Question } from '../questioncard';
import { useContext, useState } from 'react';
import { Check, Edit } from '@mui/icons-material';
import { SharedDatabase } from '@/app/shared/shared';
import { letters } from '@/app/shared/library/common/constants';
import DCard from '@/app/(DashboardLayout)/components/shared/DCard';
import { SampleQuestions } from '@/app/shared/database/questions/questions';
import { Difficulties, Subjects } from '@/app/shared/library/common/dictionaries';
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import { Button, FormControl, Grid, MenuItem, Select, SelectChangeEvent, TextareaAutosize, useMediaQuery } from '@mui/material';

export type QuestionFormOptions = {
    topics?: string[];
    choices?: string[];
    expanded?: boolean;
    subjects?: string[];
    explanation?: string;
    difficulties?: string[];
    questionToEdit?: Question;
} 

export default function QuestionForm({
    questionToEdit,
    expanded = false,
    choices = letters.slice(0, 4),
    difficulties = Object.values(Difficulties),
    explanation = SampleQuestions[0].explanation,
    subjects = Object.values(Subjects).map(s => s.name),
}: QuestionFormOptions) {

    let { setQuestions } = useContext<any>(SharedDatabase);

    let [answer, setAnswer] = useState<any>(letters[0]);
    let [subject, setSubject] = useState<any>(Subjects.Math);
    let [question, setQuestion] = useState<any>(`What is 2 + 2?`);
    let [difficulty, setDifficulty] = useState<string>(Difficulties.Easy);
    let [formTopics, setFormTopics] = useState<string[]>(subject.topics.slice(0, 3));
    const smallScreenSize = useMediaQuery((theme: any) => theme.breakpoints.down(`sm`));

    const formDisabled = () => {
        return answer == `` || question == ``;
    }

    const onSubjectChange = (event: SelectChangeEvent) => {
        let subjectStr: string = event.target.value as string;
        let convStr: string = subjectStr.replaceAll(` `, `_`);
        let subjectToSet = Subjects[convStr as keyof typeof Subjects];
        setSubject(subjectToSet);
        setFormTopics(subjectToSet.topics.slice(0,1));
    };

    const onDifficultyChange = (event: SelectChangeEvent) => {
        setDifficulty(event.target.value as string);
    };

    const onQuestionField = (e?: any) => {
        let { value } = e?.target;
        setQuestion(value);
    }

    const onTopicChange = (event: SelectChangeEvent<typeof formTopics>) => {
        const { target: { value } } = event;
        let topicToSet: any = typeof value === `string` ? value.split(`,`) : value;
        setFormTopics(topicToSet);
    };

    const onQuestionFormSubmit = (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        let value = Object.fromEntries(formData.entries());
        let { question, A, B, C, D, explanation } = value;
        question = question.toString();

        let questionToSet: Question = new Question({ 
            question,
            difficulty,
            topics: formTopics,
            choices: [A, B, C, D],
            answer: value[answer],
            subject: subject.name,
            explanation: explanation as string,
        });

        console.log(`Question`, questionToSet);

        setQuestions((prevQuestions: Question[]) => [questionToSet, ...prevQuestions]);
    }

    return (
        <Grid item xs={12} className={`questionFormItem`}>
          <DCard 
            titleMB={`10px`}
            expanded={expanded}
            expandCollapse={true}
            cardTitleLabelPadding={0} 
            cardTitleLabelBorderRadius={5}
            cardTitleBG={`var(--mainDark)`} 
            cardTitleLabelBG={`transparent`}
            className={`questionFormCard p0`} 
            cardTitleBorderColor={`transparent`}
            cardTitlePadding={`12px var(--space)`} 
            title={(
                <div className={`customCardTitle p0 m0 flex alignCenter gap5`}>
                    <span className={`formIcon`}>
                        {questionToEdit ? <Edit style={{fontSize: 12}} /> : `+`}
                    </span>
                    <h2 className={`p0 m0`}>
                        {questionToEdit ? `Update` : `Create`} Question
                    </h2>
                </div>
            )}
        >
            <form id={`questionForm`} onSubmit={(e) => onQuestionFormSubmit(e)} className={`questionForm flex column sideSpace bottomSpace`}>
              <Grid className={`formFields`} container spacing={2}>
                {subjects && subjects.length > 0 ? (
                    <Grid xs={formTopics.length > 2 ? 12 : 5} item>
                        <div className={`p10b`}>
                            <strong>Subject</strong>
                        </div>
                        <FormControl className={`selectField subjectField`} fullWidth>
                            <Select
                                id={`subjSelect`}
                                value={subject.name}
                                className={`hoverAction`}
                                onChange={onSubjectChange}
                            >
                                {subjects.map((subj: any, sidx: any) => (
                                    <MenuItem key={sidx} value={subj} className={`selectItem`}>
                                        {subj}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                ) : <></>}
                {subject.topics && subject.topics.length > 0 ? (
                    <Grid xs={formTopics.length > 2 ? 12 : 7} item>
                        <div className={`p10b`}>
                            <strong>Topics</strong>
                        </div>
                        <FormControl className={`selectField topicsField`} fullWidth>
                            <Select
                                className={`hoverAction`}
                                onChange={onTopicChange}
                                value={formTopics}
                                id={`diffSelect`}
                                multiple
                            >
                                {subject.topics.map((topic: any, tidx: any) => (
                                    <MenuItem 
                                        key={tidx} 
                                        value={topic}
                                        className={`selectItem`}
                                        disabled={formTopics.length == 1 && formTopics.includes(topic)} 
                                    >
                                        {topic}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                ) : <></>}
                <Grid item xs={12}>
                  <Grid container spacing={smallScreenSize ? 1 : 3} alignItems={`flex-end`}>
                    <Grid xs={8} item>
                        <div className={`p10b`}>
                            <strong>Question</strong>
                        </div>
                        <CustomTextField onChange={onQuestionField} defaultValue={question} id={`question`} name={`question`} placeholder={`Enter New Question`} type={`text`} className={`field`} variant={`outlined`} fullWidth />
                    </Grid>
                    {difficulties && difficulties.length > 0 ? (
                        <Grid xs={4} item>
                            <div className={`p10b`}>
                                <strong>Difficulty</strong>
                            </div>
                            <FormControl className={`selectField difficultyField`} fullWidth>
                                <Select
                                    id={`diffSelect`}
                                    value={difficulty}
                                    className={`hoverAction`}
                                    onChange={onDifficultyChange}
                                >
                                    {difficulties.map((diff: any, didx: any) => (
                                        <MenuItem key={didx} value={diff} className={`selectItem`}>
                                            {diff}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    ) : <></>}
                  </Grid>
                </Grid>
                <Grid className={`choicesContainer`} item xs={12}>
                  <div className={`p10b`}>
                    <strong>Choices</strong>
                  </div>
                  <Grid container spacing={2}>
                    {choices.map((choice: any, cidx: any) => (
                        <Grid key={cidx} xs={12} md={6} item>
                            <Grid container spacing={1} alignItems={`center`} direction={`row`}>
                                <Grid item xs={2} md={1} className={`text-center p0Important`}>
                                    Opt. {choice}
                                </Grid>
                                <Grid item xs={6} md={8} className={`p0Important`}>
                                    <CustomTextField 
                                        required 
                                        id={choice} 
                                        name={choice} 
                                        defaultValue={`Option ${choice}`} 
                                        placeholder={`Choice`} 
                                        type={`text`} 
                                        className={`field`} 
                                        variant={`outlined`} 
                                        fullWidth 
                                    />
                                </Grid>
                                <Grid item xs={4} md={3} className={`pt0Important`}>
                                    <Button 
                                        fullWidth
                                        value={choice} 
                                        onClick={() => setAnswer(choice)}
                                        endIcon={answer == choice ? <Check className={`iconButtonIcon`} /> : undefined} 
                                        className={`mainButton choiceButton iconButton fieldHeight ${answer == choice ? `selected` : ``}`} 
                                    >
                                        <strong>Correct{answer == choice ? `` : `?`}</strong>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className={`p10b`}>
                        <strong>Explanation</strong>
                    </div>
                    <TextareaAutosize 
                        name={`explanation`}
                        defaultValue={explanation} 
                        className={`field customFormField`} 
                        placeholder={`Enter Explanation...`}
                        style={{ 
                            padding: 12, 
                            fontWeight: 600,
                            letterSpacing: 0.5,
                            // fontStyle: `italic`,
                            fontFamily: `var(--font)`, 
                            fontSize: `12px !important`,
                        }}
                    />    
                </Grid>
                <Grid item xs={12}>
                  <Button disabled={formDisabled()} className={`w100 ignoreFontButton mainButton choiceButton mainDark simpleFlex alignCenter center gap5`} type={`submit`}>
                    {questionToEdit ? <Edit style={{fontSize: 12}} /> : `+`}
                    <strong>{questionToEdit ? `Update` : `Create`} Question</strong>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DCard>
        </Grid>
    )
}