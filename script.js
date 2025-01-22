// 思维模型定义
const thinkingModels = {
    '5W2H': {
        name: '5W2H分析法',
        description: '通过提问What（何事）、Why（何因）、Who（何人）、When（何时）、Where（何处）、How（何法）和How much（何量）来全面分析问题。',
        steps: [
            {
                title: '步骤1：What（何事）',
                description: '明确需要解决的问题是什么？'
            },
            {
                title: '步骤2：Why（何因）',
                description: '为什么要解决这个问题？'
            },
            {
                title: '步骤3：Who（何人）',
                description: '谁来解决这个问题？涉及哪些相关人员？'
            },
            {
                title: '步骤4：When（何时）',
                description: '什么时候解决？时间安排如何？'
            },
            {
                title: '步骤5：Where（何处）',
                description: '在哪里解决这个问题？'
            },
            {
                title: '步骤6：How（何法）',
                description: '如何解决这个问题？具体方法是什么？'
            },
            {
                title: '步骤7：How much（何量）',
                description: '需要投入多少资源？成本是多少？'
            }
        ]
    },
    'PEST': {
        name: 'PEST分析',
        description: '从政治（Political）、经济（Economic）、社会（Social）和技术（Technological）四个维度分析外部宏观环境。',
        steps: [
            {
                title: '政治环境分析',
                description: '分析政策法规、政治稳定性等因素'
            },
            {
                title: '经济环境分析',
                description: '分析经济周期、通货膨胀、利率等因素'
            },
            {
                title: '社会环境分析',
                description: '分析人口特征、文化价值观等因素'
            },
            {
                title: '技术环境分析',
                description: '分析技术创新、研发投入等因素'
            }
        ]
    },
    'SWOT': {
        name: 'SWOT分析',
        description: '通过分析优势（Strengths）、劣势（Weaknesses）、机会（Opportunities）和威胁（Threats）来制定策略。',
        steps: [
            {
                title: '优势分析',
                description: '列举内部优势'
            },
            {
                title: '劣势分析',
                description: '列举内部劣势'
            },
            {
                title: '机会分析',
                description: '列举外部机会'
            },
            {
                title: '威胁分析',
                description: '列举外部威胁'
            }
        ]
    },
    '5WHY': {
        name: '5WHY分析法',
        description: '通过连续追问5个为什么，找出问题的根本原因。',
        steps: [
            {
                title: '第一个为什么',
                description: '发现表面问题，问第一个为什么？'
            },
            {
                title: '第二个为什么',
                description: '针对第一个答案，继续追问为什么？'
            },
            {
                title: '第三个为什么',
                description: '深入分析，问第三个为什么？'
            },
            {
                title: '第四个为什么',
                description: '继续追根溯源，问第四个为什么？'
            },
            {
                title: '第五个为什么',
                description: '找到根本原因，问最后一个为什么？'
            }
        ]
    },
    'PMI': {
        name: 'PMI思维',
        description: '通过分析Plus（优点）、Minus（缺点）和Interesting（有趣之处）来全面评估。',
        steps: [
            {
                title: 'Plus（优点）',
                description: '列出所有正面因素和优点'
            },
            {
                title: 'Minus（缺点）',
                description: '列出所有负面因素和缺点'
            },
            {
                title: 'Interesting（有趣之处）',
                description: '列出值得关注的有趣观点和启发'
            }
        ]
    },
    'ORID': {
        name: 'ORID模型',
        description: '通过客观、反思、诠释和决定四个层次进行系统思考。',
        steps: [
            {
                title: 'Objective（客观）',
                description: '观察到的客观事实是什么？'
            },
            {
                title: 'Reflective（反思）',
                description: '对这些事实的感受和反应是什么？'
            },
            {
                title: 'Interpretive（诠释）',
                description: '这些意味着什么？有什么启示？'
            },
            {
                title: 'Decisional（决定）',
                description: '接下来要采取什么行动？'
            }
        ]
    },
    'DECISION_TREE': {
        name: '决策树模型',
        description: '通过树形结构展示决策过程，分析各种可能的选择和结果。',
        steps: [
            {
                title: '确定决策问题',
                description: '明确需要做出的决策是什么'
            },
            {
                title: '列举可能选项',
                description: '列出所有可能的选择方案'
            },
            {
                title: '分析结果概率',
                description: '评估每个选择可能带来的结果及其概率'
            },
            {
                title: '计算期望值',
                description: '计算每个方案的期望收益或损失'
            },
            {
                title: '做出决策',
                description: '基于分析结果选择最优方案'
            }
        ]
    },
    'SIX_HATS': {
        name: '六顶思考帽',
        description: '用不同颜色的帽子代表不同的思考角度，全面分析问题。',
        steps: [
            {
                title: '白帽思考',
                description: '关注客观事实和数据'
            },
            {
                title: '红帽思考',
                description: '表达情感、直觉和感受'
            },
            {
                title: '黑帽思考',
                description: '思考风险和潜在问题'
            },
            {
                title: '黄帽思考',
                description: '寻找优点和机会'
            },
            {
                title: '绿帽思考',
                description: '提出创新和替代方案'
            },
            {
                title: '蓝帽思考',
                description: '控制思考过程和总结'
            }
        ]
    },
    'TEN_TEN_TEN': {
        name: '10/10/10法则',
        description: '从10分钟、10个月和10年三个时间维度评估决策。',
        steps: [
            {
                title: '10分钟后',
                description: '决策在短期内会产生什么影响？'
            },
            {
                title: '10个月后',
                description: '决策在中期会带来什么变化？'
            },
            {
                title: '10年后',
                description: '决策对长期发展有什么意义？'
            }
        ]
    },
    'PARETO': {
        name: '帕累托法则',
        description: '基于20%的因素导致80%的结果这一原理进行分析。',
        steps: [
            {
                title: '识别问题',
                description: '明确需要分析的问题领域'
            },
            {
                title: '收集数据',
                description: '收集相关数据和信息'
            },
            {
                title: '分析关键因素',
                description: '找出最重要的20%因素'
            },
            {
                title: '制定行动计划',
                description: '针对关键因素制定改进方案'
            }
        ]
    },
    'REVERSE': {
        name: '逆向思维',
        description: '从相反的角度思考问题，激发创新思路。',
        steps: [
            {
                title: '定义问题',
                description: '明确当前面临的问题'
            },
            {
                title: '反向思考',
                description: '尝试从相反的角度看问题'
            },
            {
                title: '寻找启发',
                description: '从反向思考中获得新的见解'
            },
            {
                title: '整合方案',
                description: '将反向思考的结果转化为解决方案'
            }
        ]
    },
    'GOLDEN_CIRCLE': {
        name: '黄金圈法则',
        description: '通过Why（为什么）、How（如何）和What（是什么）三个层次深入思考。',
        steps: [
            {
                title: 'Why（为什么）',
                description: '为什么要做这件事？目的和信念是什么？'
            },
            {
                title: 'How（如何）',
                description: '如何实现这个目标？采用什么方法？'
            },
            {
                title: 'What（是什么）',
                description: '具体要做什么？最终的产出是什么？'
            }
        ]
    },
    'SYSTEM_REVIEW': {
        name: '系统回顾思维',
        description: '通过系统性的回顾和反思促进学习和改进。',
        steps: [
            {
                title: '回顾目标',
                description: '明确回顾的目的和范围'
            },
            {
                title: '收集反馈',
                description: '收集各方面的反馈和数据'
            },
            {
                title: '分析经验',
                description: '总结成功经验和失败教训'
            },
            {
                title: '制定改进',
                description: '基于分析制定改进计划'
            }
        ]
    },
    'MAGNIFIER': {
        name: '放大镜思维',
        description: '深入观察细节，从微观角度发现问题和机会。',
        steps: [
            {
                title: '选择焦点',
                description: '确定需要重点关注的领域'
            },
            {
                title: '细节观察',
                description: '仔细观察和记录细节'
            },
            {
                title: '发现规律',
                description: '从细节中发现模式和规律'
            },
            {
                title: '总结应用',
                description: '将发现转化为实际应用'
            }
        ]
    },
    'SCAMPER': {
        name: 'SCAMPER创新思维',
        description: '通过替代、组合、调整、修改、其他用途、消除和重组七个角度激发创新思维。',
        steps: [
            {
                title: 'Substitute（替代）',
                description: '是否可以用其他元素、材料或方法替代？'
            },
            {
                title: 'Combine（组合）',
                description: '能否与其他元素或想法结合？'
            },
            {
                title: 'Adapt（调整）',
                description: '如何调整以适应新环境或需求？'
            },
            {
                title: 'Modify（修改）',
                description: '可以改变哪些属性或特征？'
            },
            {
                title: 'Put to other uses（其他用途）',
                description: '还有什么其他可能的用途？'
            },
            {
                title: 'Eliminate（消除）',
                description: '可以简化或删除什么？'
            },
            {
                title: 'Rearrange（重组）',
                description: '如何重新安排或重组？'
            }
        ]
    },
    'SMART': {
        name: 'SMART目标法',
        description: '确保目标具体(Specific)、可衡量(Measurable)、可实现(Achievable)、相关性(Relevant)和时限性(Time-bound)。',
        steps: [
            {
                title: 'Specific（具体）',
                description: '目标是否足够具体和明确？'
            },
            {
                title: 'Measurable（可衡量）',
                description: '如何衡量目标的达成程度？'
            },
            {
                title: 'Achievable（可实现）',
                description: '目标是否切实可行？'
            },
            {
                title: 'Relevant（相关性）',
                description: '目标与整体战略是否相关？'
            },
            {
                title: 'Time-bound（时限性）',
                description: '目标完成的具体时间节点是什么？'
            }
        ]
    },
    'MINDMAP': {
        name: '思维导图',
        description: '通过放射性思维方式，将中心主题向外延伸，形成分支结构的可视化思维工具。',
        steps: [
            {
                title: '确定中心主题',
                description: '明确核心议题或主要概念'
            },
            {
                title: '创建主要分支',
                description: '确定与中心主题相关的主要类别'
            },
            {
                title: '展开次级分支',
                description: '细化每个主要分支的具体内容'
            },
            {
                title: '添加关联',
                description: '建立不同分支之间的联系'
            },
            {
                title: '优化完善',
                description: '添加关键词、图标和颜色等视觉元素'
            }
        ]
    },
    'PDCA': {
        name: 'PDCA循环',
        description: '通过计划(Plan)、执行(Do)、检查(Check)和行动(Act)四个步骤持续改进。',
        steps: [
            {
                title: 'Plan（计划）',
                description: '制定详细的行动计划和目标'
            },
            {
                title: 'Do（执行）',
                description: '按计划实施并收集数据'
            },
            {
                title: 'Check（检查）',
                description: '检查执行结果与计划的差异'
            },
            {
                title: 'Act（行动）',
                description: '根据检查结果采取改进行动'
            }
        ]
    },
    'TRIZ': {
        name: 'TRIZ创新理论',
        description: '运用发明问题解决理论，通过40个发明原理和矛盾矩阵解决技术创新问题。',
        steps: [
            {
                title: '问题定义',
                description: '明确具体的技术问题和矛盾'
            },
            {
                title: '问题转化',
                description: '将具体问题转化为标准问题'
            },
            {
                title: '寻找原理',
                description: '查找适用的发明原理'
            },
            {
                title: '方案生成',
                description: '根据原理生成具体解决方案'
            },
            {
                title: '方案评估',
                description: '评估方案的可行性和效果'
            }
        ]
    },
    'GROW': {
        name: 'GROW教练模型',
        description: '通过目标(Goal)、现实(Reality)、选项(Options)和行动(Will)四个步骤进行引导和辅导。',
        steps: [
            {
                title: 'Goal（目标）',
                description: '确定想要达到的目标'
            },
            {
                title: 'Reality（现实）',
                description: '评估当前的实际情况'
            },
            {
                title: 'Options（选项）',
                description: '探索可能的解决方案'
            },
            {
                title: 'Will（行动）',
                description: '制定具体的行动计划'
            }
        ]
    }
};

// 当前分析状态
let currentAnalysis = {
    modelType: '',
    steps: {},
    title: '',
    lastModified: null
};

// 自动保存延时器
let autoSaveTimeout;

// 初始化事件监听
document.addEventListener('DOMContentLoaded', function() {
    // 模型选择事件
    document.getElementById('model-select').addEventListener('change', function(e) {
        const modelType = e.target.value;
        if (!modelType) return;
        
        currentAnalysis = {
            modelType,
            steps: {},
            title: `${thinkingModels[modelType].name} - ${new Date().toLocaleDateString()}`
        };
        
        updateModelDescription(modelType);
        displaySteps(modelType);
    });

    // 搜索框事件
    document.getElementById('search-input').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        updateSavedList(searchTerm);
    });

    // 初始化已保存列表
    updateSavedList();
});

// 更新模型描述
function updateModelDescription(modelType) {
    const descriptionDiv = document.getElementById('model-description');
    if (modelType && thinkingModels[modelType]) {
        descriptionDiv.textContent = thinkingModels[modelType].description;
    } else {
        descriptionDiv.textContent = '';
    }
}

// 显示分析步骤
function displaySteps(modelType) {
    const container = document.getElementById('steps-container');
    container.innerHTML = '';
    
    const model = thinkingModels[modelType];
    if (!model) return;
    
    const title = document.createElement('h2');
    title.textContent = model.name;
    container.appendChild(title);
    
    model.steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step';
        
        const stepTitle = document.createElement('h3');
        stepTitle.textContent = step.title;
        
        const stepDesc = document.createElement('p');
        stepDesc.textContent = step.description;
        
        const textarea = document.createElement('textarea');
        textarea.placeholder = '在此输入你的分析...';
        textarea.value = currentAnalysis.steps[index] || '';
        textarea.addEventListener('input', (e) => {
            currentAnalysis.steps[index] = e.target.value;
            triggerAutoSave();
        });
        
        stepDiv.appendChild(stepTitle);
        stepDiv.appendChild(stepDesc);
        stepDiv.appendChild(textarea);
        container.appendChild(stepDiv);
    });
}

// 触发自动保存
function triggerAutoSave() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        if (currentAnalysis.modelType) {
            saveAnalysis(true);
            showAutoSaveIndicator();
        }
    }, 2000);
}

// 显示自动保存提示
function showAutoSaveIndicator() {
    const indicator = document.getElementById('auto-save-indicator');
    indicator.style.display = 'block';
    setTimeout(() => {
        indicator.style.display = 'none';
    }, 2000);
}

// 保存分析
function saveAnalysis(isAutoSave = false) {
    if (!currentAnalysis.modelType) return;

    currentAnalysis.lastModified = new Date().toISOString();
    const savedAnalyses = JSON.parse(localStorage.getItem('savedAnalyses') || '[]');
    savedAnalyses.push(currentAnalysis);
    localStorage.setItem('savedAnalyses', JSON.stringify(savedAnalyses));

    if (!isAutoSave) {
        alert('分析已保存！');
    }
    updateSavedList();
}

// 更新已保存列表
function updateSavedList(searchTerm = '') {
    const savedList = document.getElementById('saved-list');
    const savedAnalyses = JSON.parse(localStorage.getItem('savedAnalyses') || '[]');
    
    savedList.innerHTML = '';
    savedAnalyses
        .filter(analysis => {
            return analysis.title.toLowerCase().includes(searchTerm) ||
                   thinkingModels[analysis.modelType].name.toLowerCase().includes(searchTerm);
        })
        .forEach((analysis, index) => {
            const div = document.createElement('div');
            div.className = 'saved-item';
            
            const titleSpan = document.createElement('span');
            titleSpan.textContent = analysis.title;
            
            const actions = document.createElement('div');
            actions.className = 'actions';
            
            const loadIcon = document.createElement('i');
            loadIcon.className = 'fas fa-folder-open';
            loadIcon.title = '加载';
            loadIcon.onclick = () => loadAnalysis(index);
            
            const deleteIcon = document.createElement('i');
            deleteIcon.className = 'fas fa-trash';
            deleteIcon.title = '删除';
            deleteIcon.onclick = (e) => {
                e.stopPropagation();
                deleteAnalysis(index);
            };
            
            actions.appendChild(loadIcon);
            actions.appendChild(deleteIcon);
            
            div.appendChild(titleSpan);
            div.appendChild(actions);
            savedList.appendChild(div);
        });
}

// 加载分析
function loadAnalysis(index) {
    const savedAnalyses = JSON.parse(localStorage.getItem('savedAnalyses') || '[]');
    currentAnalysis = savedAnalyses[index];
    
    document.getElementById('model-select').value = currentAnalysis.modelType;
    updateModelDescription(currentAnalysis.modelType);
    displaySteps(currentAnalysis.modelType);
}

// 删除分析
function deleteAnalysis(index) {
    if (!confirm('确定要删除这个分析吗？')) return;
    
    const savedAnalyses = JSON.parse(localStorage.getItem('savedAnalyses') || '[]');
    savedAnalyses.splice(index, 1);
    localStorage.setItem('savedAnalyses', JSON.stringify(savedAnalyses));
    updateSavedList();
}

// 导出为PDF
function exportToPDF() {
    if (!currentAnalysis.modelType) {
        alert('请先创建或加载一个分析');
        return;
    }

    const content = document.getElementById('steps-container');
    const opt = {
        margin: 1,
        filename: `${currentAnalysis.title}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(content).save();
}

// 导出为Word
function exportToWord() {
    if (!currentAnalysis.modelType) {
        alert('请先创建或加载一个分析');
        return;
    }

    const content = document.getElementById('steps-container');
    const header = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' 
              xmlns:w='urn:schemas-microsoft-com:office:word' 
              xmlns='http://www.w3.org/TR/REC-html40'>
        <head><meta charset='utf-8'><title>${currentAnalysis.title}</title></head>
        <body>
    `;
    const footer = "</body></html>";
    const sourceHTML = header + content.innerHTML + footer;

    const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = `${currentAnalysis.title}.doc`;
    fileDownload.click();
    document.body.removeChild(fileDownload);
}

// 分享分析
function shareAnalysis() {
    if (!currentAnalysis.modelType) {
        alert('请先创建或加载一个分析');
        return;
    }
    
    const shareData = btoa(JSON.stringify(currentAnalysis));
    const shareLink = `${window.location.origin}${window.location.pathname}?share=${shareData}`;
    
    document.getElementById('share-link').textContent = shareLink;
    document.getElementById('share-modal').style.display = 'flex';
}

// 复制分享链接
function copyShareLink() {
    const shareLink = document.getElementById('share-link').textContent;
    navigator.clipboard.writeText(shareLink)
        .then(() => alert('链接已复制到剪贴板'))
        .catch(() => alert('复制失败，请手动复制'));
}

// 关闭模态框
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// 检查URL中是否有分享参数
window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const shareData = urlParams.get('share');
    
    if (shareData) {
        try {
            const sharedAnalysis = JSON.parse(atob(shareData));
            currentAnalysis = sharedAnalysis;
            document.getElementById('model-select').value = currentAnalysis.modelType;
            updateModelDescription(currentAnalysis.modelType);
            displaySteps(currentAnalysis.modelType);
        } catch (error) {
            alert('无效的分享链接');
        }
    }
});