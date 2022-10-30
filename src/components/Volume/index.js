import axios from 'axios'
import React from 'react'

import { parseCookies } from 'nookies'
import * as S from './styles'

export function Volume() {
  const { ['@token']: token } = parseCookies()

  const setVolume = async (e) => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      },
    )
  }
  return (
    <S.Container>
      <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
    </S.Container>
  )
}
