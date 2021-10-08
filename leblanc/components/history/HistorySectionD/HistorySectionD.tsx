import React from 'react'
import cn from 'classnames'
import Image from 'next/image'
import s from './HistorySectionD.module.css'
import {
  HistoryCard,
  HistoryCaption,
  HistoryTitle,
} from '@leblanc/components/history'

const HistorySectionD = () => {
  return (
    <div className={s.root}>
      <HistoryCard className={s.cardImage}>
        <div className={s.bgImg}>
          <Image
            src="/assets/history/history-4-A.jpg"
            width={1278}
            height={1913}
            layout="responsive"
          />
        </div>
        <div className={s.cardImageMiddleContent}>
          <HistoryTitle className={s.title}>
            <h2>
              AS THE FUNDAMENTALS OF THE CONCEPTUAL ART HAS BEEN ALWAYS PRESENT IN
              OUR WORK,
              <br /> <b>READY-MADE OBJECTS</b> EXPLORES THE WORK OF THE DADAISTS. WE
              DECIDED TO INCORPORATE ICONIC DADA PIECES BY MAKING IMPERFECT DOODLES
              THAT REPRESENTED THE INTERESTS OF OUR COLLABORATOR RODOLFO DIETSCH.
            </h2>
          </HistoryTitle>
        </div>
        <HistoryCaption className={s.cardImageContent}>
          <p>
            <b>READY-MADE OBJECTS FT. RODOLFO DIETSCH</b>
          </p>
          <p>
            <b>OFF SEASON: 2017</b>
          </p>
          <p>WAS LAUNCHED AT THE DISTRITO STORE, SANTO DOMINGO.</p>
          <p>AD CAMPAIGN SHOT BY MARC CORDOVA</p>
        </HistoryCaption>
      </HistoryCard>
    </div>
  )
}

export default HistorySectionD
