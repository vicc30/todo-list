'use strict';
//Import styles
import './style.css';
//import data constructor for demo
import allProjects from './common/data';
//Import render modules
import renderProjects from './render/renderProjects';
import renderTask from './render/renderTask';

//Initialize render projects then tasks.
renderProjects(allProjects);
renderTask(allProjects);