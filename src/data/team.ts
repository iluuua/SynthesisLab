// Команда: показываем только людей с подтверждёнными фото и био.
// Александру и Анастасию не выводим как production-заглушки, пока нет материалов.
import type { ImageMetadata } from 'astro';
import tatiana from '../assets/photos/tatiana.jpg';
import ekaterina from '../assets/photos/ekaterina.jpg';
import foundersImg from '../assets/photos/founders.jpg';

export interface Member {
  name: string;
  role: string;
  bio: string[];
  photo: ImageMetadata | null;
}

export const foundersPhoto = foundersImg;

export const projectTeamNote = {
  title: 'Проектная команда подключается под задачу',
  text:
    'Состав фасилитаторов, коучей и организационных консультантов собирается под запрос, масштаб команды и формат работы. Ведущие эксперты остаются в контуре диагностики и проектирования решения.',
};

export const team: Member[] = [
  {
    name: 'Татьяна Петрова',
    role: 'Сооснователь СинтезЛаб',
    photo: tatiana,
    bio: [
      'Executive-коуч, PCC ICF',
      'Командный коуч, фасилитатор',
      'Организационный консультант',
      'Член экспертного совета Центра развития лидеров и команд',
      'Спикер международных и общероссийских конференций',
    ],
  },
  {
    name: 'Екатерина Деревяшкина',
    role: 'Сооснователь СинтезЛаб',
    photo: ekaterina,
    bio: [
      'Executive и командный коуч, бизнес-психолог',
      'Ментор по внедрению командного коучинга',
      'Постоянный спикер конференций',
      'Победитель премии НФПМК 2024 в номинации «Модель внедрения коучинга в организациях» (кейс Т-Банк)',
    ],
  },
];
