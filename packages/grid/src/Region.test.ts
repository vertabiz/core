import * as cell from '@vertabiz/cells'
import { Range } from '@vertabiz/range-ref'
import test from 'ava'
import Region from './Region'

test('cellMapFromRegion(region)', t => {
  const region = Region.fromRows(
    [
      [ cell.from('B2 Value'), cell.from('C2 Value'), cell.from('D2 Value') ],
      [ cell.from('B3 Value'), cell.from('C3 Value'), cell.from('D3 Value') ],
    ],
    Range.fromAddress('B2:D3'),
  )

  t.deepEqual(
    region.asCellMap().asObject(),
    {
      B2: cell.from('B2 Value'),
      C2: cell.from('C2 Value'),
      D2: cell.from('D2 Value'),
      B3: cell.from('B3 Value'),
      C3: cell.from('C3 Value'),
      D3: cell.from('D3 Value'),
    }
  )
})

test('#toRows()', t => {
  const region = Region.fromRows(
    [
      [ cell.from('B2 Value'), cell.from('C2 Value'), cell.from('D2 Value') ],
      [ cell.from('B3 Value'), cell.from('C3 Value'), cell.from('D3 Value') ],
    ],
    Range.fromAddress('B2:D3'),
  )

  const rows = region.toRows()

  t.deepEqual(
    rows,
    [
      [ cell.from('B2 Value'), cell.from('C2 Value'), cell.from('D2 Value') ],
      [ cell.from('B3 Value'), cell.from('C3 Value'), cell.from('D3 Value') ],
    ],
  )
})