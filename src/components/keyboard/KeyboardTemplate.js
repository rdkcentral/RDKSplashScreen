/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 RDK Management
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const template = {
	keyWidth: 50,
	keyHeight: 70,
	horizontalSpacing: 25,
	verticalSpacing: 20,
	layouts: {
		'abc': {
			rows: [
				{
					keys: [
						{c: 'a'},
						{c: 'b'},
						{c: 'c'},
						{c: 'd'},
						{c: 'e'},
						{c: 'f'},
						{c: 'g'},
						{c: 'h'},
						{c: 'i'},
						{c: 'j'},
						{c: 'k'},
						{c: 'l'},
						{action: 'backspace', w: 125, source: 'images/icons/icon_backspace.png' }
					]
				},
				{
					keys: [
						{c: 'm'},
						{c: 'n'},
						{c: 'o'},
						{c: 'p'},
						{c: 'q'},
						{c: 'r'},
						{c: 's'},
						{c: 't'},
						{c: 'u'},
						{c: 'v'},
						{c: 'w'},
						{c: 'x'},
						{c: 'y'},
						{c: 'z'}
					]
				},
				{
					keys: [
						{c: '.'},
						{c: '_'},
						{c: '-'},
						{c: '@'},
						{c: '0'},
						{c: '1'},
						{c: '2'},
						{c: '3'},
						{c: '4'},
						{c: '5'},
						{c: '6'},
						{c: '7'},
						{c: '8'},
						{c: '9'}
					]
				},
				{
					keys: [
						{c: ','},
						{action: 'space', c: 'space', w: 650},
						{action: 'toggleToLayout', toLayout: '#123', c: '!#', w: 125},
						{action: 'toggleToLayout', toLayout: 'ABC', c: 'ABC', w: 125}
					]
				},
				// {
				// 	keys: [
				// 		{action: '.com', c: '.com', w: 125},
				// 		{action: '@gmail.com', c: '@gmail.com', w: 275},
				// 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
				// 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
				// 	]
				// }
			]
		},
		'ABC': {
			rows: [
				{
					keys: [
						{c: 'A'},
						{c: 'B'},
						{c: 'C'},
						{c: 'D'},
						{c: 'E'},
						{c: 'F'},
						{c: 'G'},
						{c: 'H'},
						{c: 'I'},
						{c: 'J'},
						{c: 'K'},
						{c: 'L'},
						{action: 'backspace', w: 125, source: 'images/icons/icon_backspace.png' }
					]
				},
				{
					keys: [
						{c: 'M'},
						{c: 'N'},
						{c: 'O'},
						{c: 'P'},
						{c: 'Q'},
						{c: 'R'},
						{c: 'S'},
						{c: 'T'},
						{c: 'U'},
						{c: 'V'},
						{c: 'W'},
						{c: 'X'},
						{c: 'Y'},
						{c: 'Z'}
					]
				},
				{
					keys: [
						{c: '.'},
						{c: '_'},
						{c: '-'},
						{c: '@'},
						{c: '0'},
						{c: '1'},
						{c: '2'},
						{c: '3'},
						{c: '4'},
						{c: '5'},
						{c: '6'},
						{c: '7'},
						{c: '8'},
						{c: '9'}
					]
				},
				{
					keys: [
						{c: ','},
						{action: 'space', c: 'space', w: 650},
						{action: 'toggleToLayout', toLayout: '#123', c: '!#', w: 125},
						{action: 'toggleToLayout', toLayout: 'abc', c: 'abc', w: 125}
					]
				},
				// {
				// 	keys: [
				// 		{action: '.com', c: '.com', w: 125},
				// 		{action: '@gmail.com', c: '@gmail.com', w: 275},
				// 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
				// 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
				// 	]
				// }
			]
		},
		'#123': {
			rows: [
				{
					keys: [
						{c: '!'},
						{c: '@'},
						{c: '#'},
						{c: '$'},
						{c: '%'},
						{c: '^'},
						{c: '&'},
						{c: '*'},
						{c: '('},
						{c: ')'},
						{c: '`'},
						{c: '~'},
						{action: 'backspace', w: 125, source: 'images/icons/icon_backspace.png' }
					]
				},
				{
					keys: [
						{c: '¡'},
						{c: '¿'},
						{c: '∞'},
						{c: '['},
						{c: ']'},
						{c: '{'},
						{c: '}'},
						{c: '\\'},
						{c: '|'},
						{c: '-'},
						{c: '_'},
						{c: '='},
						{c: '+'},
						{c: ';'}
					]
				},
				{
					keys: [
						{c: ':'},
						{c: '•'},
						{c: '\"'},
						{c: '\''},
						{c: '<'},
						{c: '>'},
						{c: '.'},
						{c: ','},
						{c: '/'},
						{c: '?'}
					]
				},
				{
					keys: [
						{c: ''},
						{action: 'space', c: 'space', w: 650},
						{action: 'toggleToLayout', toLayout: 'abc', c: 'abc', w: 125},
						{action: 'toggleToLayout', toLayout: 'ABC', c: 'ABC', w: 125}
					]
				},
				// {
				// 	keys: [
				// 		{action: '.com', c: '.com', w: 125},
				// 		{action: '@gmail.com', c: '@gmail.com', w: 275},
				// 		{action: '@hotmail.com', c: '@hotmail.com', w: 275},
				// 		{action: '@yahoo.com', c: '@yahoo.com', w: 275}
				// 	]
				// }
			]
		},
	}
};

export default template;