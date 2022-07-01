class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLTemplateElement;
  element: HTMLFormElement;

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLTemplateElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}
