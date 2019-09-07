const appTemplate = `<span>
    <div class="second-line">
        <gclid-input ref="gclidInput" @update:value="updateInputVal" @reload="reload"></gclid-input>
        <custom-btn parentClass="go-parent" parentId="go-parent" btnClass="btn-primary"
                btnId="go" btnLabel="Go!" @click="reload">
        </custom-btn>
    </div>
    <div class="third-line" id="clear-parent">
        <custom-btn parentClass="clear-parent" parentId="clear-parent" btnClass="btn-warning"
                btnId="clear" btnLabel="Clear GoogleAds-related Cookies" @click="clear">
        </custom-btn>
    </div>
    <div class="forth-line" id="clear-all-parent">
        <custom-btn parentClass="clear-all-parent" parentId="clear-all-parent" btnClass="btn-danger"
                    btnId="clear-all" btnLabel="Clear All Cookies of This Domain" @click="clearAll">
        </custom-btn>
    </div>
    <div class="msgs">
        <cookie-msg ref='gclawMsg' parentId="gclaw-msg" compId="gclaw-name"
                    valueId="gclaw-value" name="gclaw" @get:cookies="getCookies">
        </cookie-msg>
        <cookie-msg ref='gacMsg' parentId="gac-msg" compId="gac-name"
                    valueId="gac-value" name="gac" @get:cookies="getCookies">
        </cookie-msg>
        <cookie-msg ref='gclidMsg' parentId="gclid-msg" compId="gclid-name"
                    valueId="gclid-value" name="gclid" @get:cookies="getCookies">
        </cookie-msg>
    </div>
    <footer-comp ref="footer" @toggle="toggle"></footer-comp>
    </span>`;

 export default appTemplate;