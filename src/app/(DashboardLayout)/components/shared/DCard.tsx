import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Card, CardContent, Typography, Stack, Box, Button } from '@mui/material';

type CardOptions = {
  style?: any;
  subtitle?: string;
  expanded?: boolean;
  className?: string;
  background?: string;
  showTitle?: boolean;
  cardTitleBG?: string;
  footer?: JSX.Element;
  stackJustify?: string;
  id?: string | undefined;
  cardTitleColor?: string;
  expandCollapse?: boolean;
  title?: JSX.Element | any;
  cardContentClass?: string;
  cardTitleLabelBG?: string; 
  action?: JSX.Element | any;
  children?: JSX.Element | any;
  component?: React.ElementType;
  cardTitleBorderColor?: string;
  height?: string | number | any;
  titleMB?: string | number | any;
  minHeight?: string | number | any;
  expandCollapseButtonColor?: string;
  middlecontent?: string | JSX.Element;
  cardTitlePadding?: string | number | any;
  cardTitleLabelPadding?: string | number | any;
  cardTitleLabelBorderRadius?: string | number | any; 
};

export default function DCard({
  id,
  title,
  style,
  height,
  action,
  footer,
  subtitle,
  children,
  minHeight,
  background,
  titleMB = 3,
  middlecontent,
  expanded = true,
  className = `dCard`,
  cardTitleColor = ``,
  cardTitlePadding = 0,
  expandCollapse = false,
  showTitle = title != ``,
  cardTitleBG = `transparent`,
  component: Component = Card,
  stackJustify = `space-between`,
  cardTitleLabelBorderRadius = 0,
  cardTitleLabelBG = `transparent`,
  cardTitleLabelPadding = `0 0 5px 0`,
  cardTitleBorderColor = `var(--main)`,
  cardContentClass = `cardContentClass`,
  expandCollapseButtonColor = `transparent`,
}: CardOptions) {
  let [isExpanded, setIsExpanded] = useState<any>(expanded);

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card 
      elevation={9} 
      style={style}
      variant={undefined}
      id={id ? id.toString() : undefined} 
      className={`card ${className} ${(style && style.background || background) ? `hasBackground` : ``} ${isExpanded ? `expanded` : `collapsed`}`} 
      sx={{ 
        padding: 0, 
        ...(height && height != undefined && height > 0 ? { height: height } : {}), 
        ...(minHeight && minHeight != undefined && minHeight > 0 ? { minHeight: minHeight } : {}) 
      }}
    >
      <CardContent className={`cardContent ${cardContentClass}`} sx={{ p: `30px` }}>
        {title ? (
          <Stack
            spacing={2}
            direction={`row`}
            alignItems={`center`}
            mb={children ? titleMB : 0}
            justifyContent={stackJustify}
            className={`cardTitleRow titleStack`}
            style={{ 
              background: cardTitleBG, 
              padding: cardTitlePadding,
            }}
          >
            <Box className={`cardTitleBox`}>
              {title ? (
                typeof title == `string` ? (
                  <Typography 
                    variant={`h5`}
                    className={`cardTitle`} 
                    style={{ 
                      background: cardTitleLabelBG, 
                      padding: cardTitleLabelPadding,
                      borderColor: cardTitleBorderColor,
                      borderRadius: cardTitleLabelBorderRadius,
                      borderBottom: `1px solid ${cardTitleBorderColor}`, 
                      color: cardTitleColor != `` ? cardTitleColor : undefined, 
                    }} 
                  >
                    {showTitle ? title : ``}
                  </Typography>
                ) : (
                  showTitle ? title : ``
                )
              ) : ``}
              {subtitle ? (
                <Typography 
                  variant={`subtitle2`} 
                  color={`textSecondary`}
                  style={{ color: cardTitleColor != `` ? cardTitleColor : undefined, borderBottom: `1px solid ${cardTitleBorderColor}` }} 
                >
                  {subtitle}
                </Typography>
              ) : (
                ``
              )}
            </Box>
            {expandCollapse ? (
              <Button 
                onClick={handleExpandCollapse} 
                style={{ background: expandCollapseButtonColor }} 
                endIcon={isExpanded ? <IconChevronUp /> : <IconChevronDown />}
                className={`expandCollapse hoverAction fit h100 mainButton expandCollapse`}
              >
                <strong>{isExpanded ? `Collapse ` : `Expand `}</strong>
              </Button>
            ) : action}
          </Stack>
        ) : null}
        {children}
      </CardContent>
      {middlecontent}
      {footer}
    </Card>
  );
};