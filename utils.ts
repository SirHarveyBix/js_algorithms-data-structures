/**
 * ANSI Color Codes :
 * https://talyian.github.io/ansicolors/
 */

export class Logger {
  public static printTitle(title: string): void {
    const hashs = this.titleToHash(title);

    console.log(`${hashs}\x1b[38;5;200m ${title}\x1b[0m${hashs}`);
  }

  public static printSpacer(condition: unknown): void {
    console.log(`${condition && '   --------\n'}`);
  }

  public static printValues(
    condition: unknown,
    valueText: string,
    text: string
  ): void {
    console.log(
      `\x1b[38;5;214m     ${valueText}\x1b[0m: ${text}: ${condition}.\n`
    );
  }

  private static titleToHash(title: string): string {
    const hash = [];
    for (let i = 0; i < title.length; i++) {
      hash.push('#');
    }
    return `\n${hash.toString().replace(/,/g, '') + '##'}\n`;
  }
}
