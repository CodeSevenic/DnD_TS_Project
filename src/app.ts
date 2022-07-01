class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLTemplateElement;

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLTemplateElement;
  }
}
