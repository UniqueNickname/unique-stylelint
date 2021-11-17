module.exports = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: 'conventional-changelog-conventionalcommits',
	formatter: '@commitlint/format',
	rules: {
		'type-enum': [
			2, 'always',
			[
				'feat',
				'fix',
				'docs',
				'refactor',
				'chore',
				'revert',
			]
		],
		'scope-enum': [
			2, 'always',
			[
				'commitlint',
				'config',
				'deps',
				'deps-dev',
				'git',
				'husky',
			],
		],
		'subject-case': [0],
	},
}
