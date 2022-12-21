// Copyright (C) 2022 Nethesis S.r.l.
// SPDX-License-Identifier: AGPL-3.0-or-later

import JanusLib from './janus'

type JanusLibTypes = typeof JanusLib

export interface JanusTypes extends JanusLibTypes {
  log?: (message: string, error?: Error) => void
  warn?: (message: string, error?: Error) => void
  error?: (message: string, error?: Error) => void
  debug?: (message: string, error?: Error) => void
  attachMediaStream?: (
    video: HTMLVideoElement | HTMLAudioElement | null,
    stream: MediaStream,
  ) => void
}
