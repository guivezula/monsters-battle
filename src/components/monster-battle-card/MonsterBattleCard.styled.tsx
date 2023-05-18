import styled from "@emotion/styled"
import { Card, Divider, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const BattleMonsterCard = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    padding: '13px 11px',
    width: 'calc(307px - 22px)',
    height: '415px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: centralized ? 'flex' : 'auto',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'center' : 'auto',
}));

export const BattleMonsterCardContent = styled.div<{centralized?: boolean }>(({ centralized }) => ({
    display: centralized ? 'flex' : 'auto',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'flex-start' : 'auto',
    flexDirection: 'column',
    height: '100%',
}));
  
export const BattleMonsterTitle = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '42px',
    color: colors.black,
}));

export const BattleMonsterName = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '22px',
    lineHeight: '26px',
    color: colors.black,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    marginTop: '14px',
    width: '100%',
    paddingBottom: '5px',
}));

export const ProgressBar = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 15,
    width: '100%',
    marginBottom: '11px',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: colors.progressColor,
    },
}));

export const BattleMonsterSkill = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.black,
    width: '100%',
    paddingBottom: '5px',
}));

export const BattleMonsterSkillContainer = styled.div(() => ({
    width: '100%',
    marginTop: '11px',
}));

export const Image = styled.img(() => ({
    borderRadius: '7px',
    width: '283px',
    height: '178px',
    filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
  }))