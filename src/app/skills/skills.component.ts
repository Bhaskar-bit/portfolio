import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies: [{ name: "JavaScript, Typescript, Angular, React", percent: 90, remark: 'excellent' },{ name: "HTML 5, CSS 3, Bootstrap", percent: 90, remark: 'excellent' }, { name: "D3js, Nodejs", percent: 70, remark: 'good' }, { name: "Accessiblity", percent: 90, remark: 'excellent' }, { name: ".Net, C#", percent: 60, remark: 'good' }],
            tools: [{ name: "Git", percent: 90, remark: 'excellent' }, { name: "Office", percent: 90, remark: 'excellent' }, { name: "Linux, Windows", percent: 70, remark: 'very-good' }, { name: "MySql, PgSql", percent: 90, remark: 'excellent' }, { name: "Cloud Platforms (AWS,GCP)", percent: 50, remark: 'average' }],
            methodologies: [{ name: "Scrum", percent: 70, remark: 'very-good' },{ name: "Design Thinking", percent: 70, remark: 'good' }, { name: "TDD", percent: 90, remark: 'excellent' }, { name: "DevOps", percent: 50, remark: 'average' }]
        };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
