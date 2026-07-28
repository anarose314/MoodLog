const commitTypes = [
  '🎉 Init',
  '✨ Feat',
  '🐛 Fix',
  '♻️ Refactor',
  '🔧 Chore',
  '🎨 Style',
  '📝 Docs',
  '🚚 Rename',
  '🔥 Remove',
  '🔀 Merge',
  '🚀 Deploy',
];

module.exports = {
  parserPreset: {
    parserOpts: {
      // "이모지 + 텍스트 + 콜론(:) + 띄어쓰기 + 내용" 형태인지 검사
      headerPattern:
        /^(\S+\s(?:Init|Feat|Fix|Refactor|Chore|Style|Docs|Merge|Rename|Remove|Deploy)):\s(.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', commitTypes], // 위 배열에 있는 타입만 허용
    'type-empty': [2, 'never'], // 타입(Feat 등)이 비어있으면 에러
    'subject-empty': [2, 'never'], // 제목(내용)이 비어있으면 에러
    'body-leading-blank': [2, 'always'], // 본문을 쓸 경우, 제목과 한 줄 띄우기
    'body-max-line-length': [2, 'always', 72], // 본문 한 줄은 72자 넘지 않기
  },
};
