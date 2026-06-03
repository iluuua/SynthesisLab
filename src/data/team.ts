// Команда: ровно 4 человека. Татьяна и Екатерина — с фото и био.
// Александра и Анастасия — аккуратные заглушки (фото/био пока нет), сразу после Екатерины.
// Блок «Проектная команда подключается под задачу» удалён по правке заказчика.
import type { ImageMetadata } from 'astro';
import tatiana from '../assets/photos/tatiana.jpg';
import ekaterina from '../assets/photos/ekaterina.jpg';
import foundersImg from '../assets/photos/founders.jpg';

export interface Member {
  name: string;
  role: string;
  bio: string[];
  photo: ImageMetadata | null;
  placeholder?: boolean; // true → рендерим заглушку (инициалы + пометка), без выдуманного био
}

export const foundersPhoto = foundersImg;

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
  {
    // TODO(team): добавить фото и био Александры после согласования с клиентом.
    name: 'Александра Теплицкая',
    role: 'Команда СинтезЛаб',
    photo: null,
    placeholder: true,
    bio: [],
  },
  {
    // TODO(team): добавить фото и био Анастасии после согласования с клиентом.
    name: 'Анастасия Львова',
    role: 'Команда СинтезЛаб',
    photo: null,
    placeholder: true,
    bio: [],
  },
];
