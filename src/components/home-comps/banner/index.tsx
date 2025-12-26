import { cn } from '@site/src/lib/utils';
import cls from 'classnames';
import React from 'react';
import { useLang } from '@rspress/core/runtime';
import { Button } from '@rspress/core/theme';
import { DotPattern } from './DotPattern';
import styles from './index.module.less';

const desc = {
  zh: '开始用 ',
  en: 'Start building with ',
  ko: '시작하기 ',
};

const btnText = {
  zh: '快速开始',
  en: 'Quick Start',
  ko: '빠른 시작',
};

const tailText = {
  zh: ' 构建',
  en: '',
  ko: '',
};

export const Banner: React.FC = () => {
  const lang = useLang() as 'en' | 'zh' | 'ko';

  return (
    <div className={styles['banner-frame']}>
      <p className={cls(styles['banner-title'], lang === 'zh' && styles.zh)}>
        {desc[lang]} <span className={styles['lynx-text']}>Lynx</span>
        {tailText[lang]}
      </p>
      <Button href={`guide/start/quick-start.html`}>
        {btnText[lang] || btnText['en'] || btnText['ko']}
      </Button>
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(450px_200px_ellipse_at_center,white,transparent)]',
        )}
      />
    </div>
  );
};
