// @flow
import { mapToStyles } from './computeStyles';

it('computes the popper styles', () => {
  window.devicePixelRatio = 2;

  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: null,
      placement: 'bottom',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: true,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();

  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: null,
      placement: 'bottom',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();

  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: null,
      placement: 'top',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();

  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: null,
      placement: 'left',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();

  // it uses the other direction with the end variation
  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: 'end',
      placement: 'left',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();
  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: 'end',
      placement: 'right',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();
  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: 'end',
      placement: 'top',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();
  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: 'end',
      placement: 'bottom',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();


  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: 'end',
      placement: 'bottom',
      popperRect: { x: 108.34375, y: 8, width: 140.296875, height: 38 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();

  // customize roundOffsets impls
  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: null,
      placement: 'left',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10.3, y: 5.83 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: ({ x, y }) => ({
        x: Math.round(x + 2),
        y: Math.round(y + 2),
      }),
      isFixed: false,
    })
  ).toMatchSnapshot();

  // disabele builtin `roundOffsetsByDPR`
  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: null,
      placement: 'left',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10.3, y: 5.83 },
      position: 'absolute',
      gpuAcceleration: false,
      adaptive: true,
      roundOffsets: false,
      isFixed: false,
    })
  ).toMatchSnapshot();

  window.devicePixelRatio = 1;
});

it('computes the arrow styles', () => {
  expect(
    mapToStyles({
      popper: document.createElement('div'),
      variation: null,
      placement: 'bottom',
      popperRect: { x: 10, y: 10, width: 100, height: 100 },
      offsets: { x: 10, y: 5 },
      position: 'absolute',
      gpuAcceleration: true,
      adaptive: false,
      roundOffsets: true,
      isFixed: false,
    })
  ).toMatchSnapshot();
});
