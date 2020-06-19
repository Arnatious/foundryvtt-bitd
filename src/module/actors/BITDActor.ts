/**
 *
 *
 * @export
 * @class BITDActor
 * @extends {Actor}
 */
export class BITDActor extends Actor {
    prepareData(): void {
        super.prepareData();

        const actorData: ActorData = this.data;
        const data = actorData.data;
        const flags = actorData.flags;

        switch (actorData.type) {
            case 'character':
                break
            case 'crew':
                break
        }
    }
}
