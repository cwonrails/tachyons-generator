import test from 'ava'
import fs from 'fs'
import path from 'path'

import config from '../config'
import tachyonsGenerator from '../'

test('border widths are generated for widths array when included in config', async t => {
  const tachy = tachyonsGenerator({ borderWidths: [0, 0.125, 0.25, 0.5, 1, 2] })
  const {
    modules: {
      borderWidths
    }
  } = await tachy.generate()

  t.snapshot(borderWidths)
})

test('border radii are generated for radii array when included in config', async t => {
  const tachy = tachyonsGenerator({ borderRadius: [0, 0.125, 0.25, 0.5, 1] })
  const {
    modules: {
      borderRadius
    }
  } = await tachy.generate()

  t.snapshot(borderRadius)
})
